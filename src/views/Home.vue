<template>
  <v-col cols="4">
    <h3>{{car.name}}</h3>
    <h3>{{car.color}}</h3>
    <h3>{{car.model}}</h3>
    <h3>{{car.weight}}</h3>
    <h3>{{car.arr[1].d}}</h3>
  </v-col>


</template>


<script>
  export default {

    data() {
      return {
        car:{
          name: "Ford",
          color: "white",
          model: "New",
          weight: "500Kg",
          arr: [
            {
              a:"test",
              b:"test1"
            },
            {
              c:"test3",
              d:"test4"
            }
          ],


        }
      }
    }, 

    created(){
      console.log("car",this.car)
    },

    methods:{
      // walalang(nu){
      //   this.str = this.num1 + this.num2
      // },

      myFunction(p1, p2) {
        return p1 + p2;
      }

    }
    
  }
</script>