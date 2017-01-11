// CommitChart.js
//import { Bar } from 'vue-chartjs'
// import VueResource from 'vue-resource'
debugger


export default Bar.extend({
  ready () {
    debugger
    /*$.ajax(
      {
        url: "http://jasongan.cn/php/futureWeather.php",                                   //跨域到http://www.wp.com，另，http://test.com也算跨域
        type: "GET",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        //dataType: 'jsonp',                          //指定为jsonp类型
        //data: `data=${postStr}`,                    //数据参数
        //jsonp: 'callback',
        success: function (e) {
           var result = JSON.parse(e).f.f1;
           var lowTemp = [], highTemp = [];
           for(var i = 0; i < result.length; i++) {
              lowTemp.push(result[i].fd);
              highTemp.push(result[i].fc);
           }
           this.render({
              labels: ['1', '2', '3', '4', '5', '6', '7'],
              datasets: [
                {
                  label: '最低温度',
                  backgroundColor: '#333333',
                  data:  lowTemp
                },
                {
                  label: '最高温度',
                  backgroundColor: '#f87979',
                  data: highTemp
                }
              ]
            }, {responsive: true, maintainAspectRatio: false})

        },
        error: function (e) {
          //reject(msg);
          this.render({
              labels: ['1', '2', '3', '4', '5', '6', '7'],
              datasets: [
                {
                  label: '最低温度',
                  backgroundColor: '#333333',
                  data:  [1,2,3,4,5,6,7]
                },
                {
                  label: '最高温度',
                  backgroundColor: '#f87979',
                  data:  [11,12,23,14,15,16,17]
                }
              ]
            }, {responsive: true, maintainAspectRatio: false})
          // debugger
        }
      }
    )*/
    /*this.$http.get("http://jasongan.cn/php/futureWeather.php")
                .then((response) => {
                     var result = JSON.parse(response).f.f1;
                     var lowTemp = [], highTemp = [];
                     for(var i = 0; i < result.length; i++) {
                        lowTemp.push(result[i].fd);
                        highTemp.push(result[i].fc);
                     }
                     this.render({
                        labels: ['1', '2', '3', '4', '5', '6', '7'],
                        datasets: [
                          {
                            label: '最低温度',
                            backgroundColor: '#333333',
                            data:  lowTemp
                          },
                          {
                            label: '最高温度',
                            backgroundColor: '#f87979',
                            data: highTemp
                          }
                        ]
                      }, {responsive: true, maintainAspectRatio: false})
                })
                .catch(function(response) {
                    console.log(response)
                })*/


    // var result = e.f.f1;

    // var lowTemp = [], highTemp = [];
    // for(var i = 0; i < result.length; i++) {
    //   lowTemp.push(result[i].fd);
    //   highTemp.push(result[i].fc);
    // }
    // console.log(lowTemp);
    //debugger
    this.render({
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      datasets: [
        {
          label: '最低温度',
          backgroundColor: '#333333',
          data:  [1,2,3,4,5,6,7]
        },
        {
          label: '最高温度',
          backgroundColor: '#f87979',
          data:  [11,12,23,14,15,16,17]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
    
  }
})
