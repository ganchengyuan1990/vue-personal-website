<template>
<!-- <chart :options="polar"></chart> -->
<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
</template>

<style>
.echarts {
  height: 300px;
}
</style>

<script>
import ECharts from 'vue-echarts/src/components/ECharts.vue';  

export default {
  data: function () {
    let data = []

    for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
    }

    return {
      slots: [
        {
          flex: 1,
          values: ['北京', '上海', '浙江'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ["北京","上海", "浙江"],
          className: 'slot3',
          textAlign: 'left'
        }
      ],
      polar: {
        /*title: {
          text: '极坐标双数值轴'
        },*/
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      }
    }
  },
  methods: {
    onValuesChange(picker, values) {
      debugger
      if(values[0] = "北京") {
         picker.setSlotValue(1, ["北京"]);
      } else if(values[0] = "浙江") {
        picker.setSlotValue(1, ["宁波","杭州"]);
      } else if(values[0] = "上海"){
        picker.setSlotValue(1, ["上海"]);
      }
      /*if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }*/
    }
  },
  ready() {
    debugger
  },
  components:{  
  //注册组件
  'chart':ECharts  
  }
}
</script>

<style>
  .echarts {
    width: 100% !important;
  }
</style>