<template>
	<div><commit-chart :data="chartData"></commit-chart></div>
   
</template>


<script>

	import CommitChart from './charts'

	export default {
	  components: {
	    CommitChart,
	  },
	  data() {
	  	return {
	  	  chartData: {
		  	  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		      datasets: [
		        {
		          label: 'GitHub Commits',
		          backgroundColor: '#f87979',
		          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
		        }
		      ]
	  	  }
	  	}
	  },
	  mounted() {
	  	debugger
	  }
	}
</script>
