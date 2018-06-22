<template>
  <div>
    <v-flex class="f-lex">
      <h1>Currency List</h1>
      <v-text-field
          class="in"
          placeholder="Search currency"
          append-icon="search"
          color="white"
          hide-details
          v-model="findCurrency"
        ></v-text-field>
    </v-flex>
  <Currency-list :currencyList="filteredCurrencies"/>
  </div>
</template>

<script>
import CurrencyList from "./../components/CurrencyList";
export default {
  components: {
    CurrencyList
  },
  data() {
    return {
      findCurrency: ""
    };
  },
  computed: {
    filteredCurrencies() {
      let filter = new RegExp(this.findCurrency, "i");
      const arr = Object.values(this.$store.state.currencyList);
      const filtered = arr.filter(el => el.name.match(filter));
      console.log(filtered);
      return filtered;
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin-left: 1rem;
}

.f-lex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.in {
  padding: 0;
  width: 25%;
  flex: initial;
  transition: width 0.3s ease-in;
}
</style>
