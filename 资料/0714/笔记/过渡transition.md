# 过渡transition

1. 第一个参数：哪些（中间用逗号隔开）或那个属性，全部属性过渡变化使用all（display不支持）

2. 第二个参数（空格隔开参数）时间取值，单位秒S，毫秒MS

3. 第三个参数：时间运动 曲线

   1. ```
              .box div:nth-child(1){
                  transition: all 3s ease 0s;
              }
              .box div:nth-child(2){
                  transition: all 3s ease-in-out 0s;
              }
              .box div:nth-child(3){
                  transition: all 3s ease-out 0s;
              }
              .box div:nth-child(4){
                  transition: all 3s ease-in 0s;
              }
              .box div:nth-child(5){
                  transition: all 3s linear 0s;
              }
      ```

   2. 先加速后减速ease；linear匀速

   3. 贝塞尔曲线cubic-bezier(0,-0.01,1,.99)，模拟网址：[cubic-bezier(0,-0.01,1,.99) ✿ cubic-bezier.com](https://cubic-bezier.com/#0,-0.01,1,.99)

4. 第四个参数：延迟开始的时间S。MS。可以为负数，意为提前已经开始了多久。



