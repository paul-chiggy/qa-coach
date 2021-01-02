<template>
    <div id="calculator">
    {{ title }}
        <form @submit.prevent="onSubmit">
            <label>Submit your number to calculate its squared value: </label>
            <br/>
            <input
                placeholder=" type here "
                type="text"
                v-model="index"
                @input="updateIndex($event.target.value)"
            />
            <br/>
            <button>Submit</button>
        </form>

        <h3>Squares I have seen:</h3>
        <p>{{ renderSeenIndexes() }}</p>

        <h3>Calculated stuff:</h3>
        <p>{{ renderValues() }}</p>

    </div>
</template>


<script>
import axios from "axios";

export default {
    name: "Calculator",
    props: {
        title: String
    },
    data() { 
        return { 
            seenIndexes: [],
            values: {},
            index: ""
        }
    },
    methods: {
        updateIndex: function(value) {
            this.index = value;
        },
        // renders all checked indeces
        renderSeenIndexes: function() {
            return this.seenIndexes.map(({ number }) => number).join(", ").toString();
        },
        renderValues: function() {
            const entries = [];

            for(let key in this.values) {
                entries.push(
                    " Squared " + key + " => " + this.values[key]
                );
            }
            return entries.toString();
        },
        async onSubmit () {
            await axios.post("/api/values/new", {
                index: this.index
            });

            this.index = "";
        },
        // method to fetch the current index value
        async fetchValues() {
            const values = await axios.get("/api/values/current");
            this.values = values.data;
        },
        //method to fetch all indexes
        async fetchIndexes() {
            const seenIndexes = await axios.get("/api/values/all");
            this.seenIndexes = seenIndexes.data;
        }
    },
    // Declare mounted lifecycle hook
    mounted() {
        this.fetchValues();
        this.fetchIndexes();
    }
}
</script>


<style scoped>
h3 {
    margin: 20px 0 0;
    color:#e6d2f7;
    font-weight: bold;
}
#calculator {
    padding: 10px 0 10px 0;
}
p {
    color: #e6d2f7;
}
</style>
