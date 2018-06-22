<template>
  <v-layout row wrap>
    <v-flex xs12 sm4 v-for="currency in currencyList" :key="currency.id" >
      <v-card>
        <v-card-media height="200px">
          <img src="https://cdn.newsapi.com.au/image/v1/8d04628e911865cd4272017f18629e51" alt="">
          <img :src="`icon/${currency.symbol}.svg`" class="icon">
          <h3> {{currency.symbol}} </h3>
          
          <p>Percent change (24h):
            <br> 
            <span :class="{
              positive: currency.quotes.USD.percent_change_24h > 0,
              negative: currency.quotes.USD.percent_change_24h < 0,
              zero: currency.quotes.USD.percent_change_24h === 0
              }">
              {{currency.quotes.USD.percent_change_24h}} %</span> 
          </p>
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <p class="headline mb-0">{{currency.name}}</p>
            <div>{{text}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Shares</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    
    
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      text:
        "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel.",
      classObject: {
        positive: "currency.quotes.USD.percent_change_24h > 0"
      }
    };
  },
  computed: {
    currencyList() {
      return this.$store.state.currencyList;
    },
    currencyCode() {
      return this.$store.state.currencyList.symbol.toLowerCase();
    }
  },
  created() {
    this.$store.dispatch("getCurrencyList");
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin: 1rem;
}

.card__media img {
  filter: grayscale(60%);
}
.card__media__content > h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  text-align: center;
  color: #2c3e50;
}

.card__media__content > p {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #2c3e50;
}

.card__media__content {
  span {
    font-size: 26px;
    font-weight: bold;
  }
}

.icon {
  position: absolute;
  height: auto;
  width: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 35%;
}

.positive {
  color: #00ff50;
}

.negative {
  color: red;
}

.zero {
  color: #e67e22;
}
</style>
