# 变形transform

1. ### 轴的概念

   1. 元素自身带有XYZ三个轴，以元素自身的方位为标准
   2. 例如：当元素先旋转，则它的XY轴都会随着自己变化

2. ### 旋转函数transform:rotate(45deg);

   1. rotate旋转函数()中写角度
   2. deg角度单位
   3. rotateX()绕着X轴的旋转，在2D平面上表现为高度缩减
   4. rotateY()绕着Y轴的旋转，在2D平面上表现为宽度缩减
   5. 可以绕X或Y旋转90deg，使元素隐身

3. ### 平移函数

   1. 2D平面上有两种平移：X轴平移和Y轴平移
   2. transform: translate(100px,200px);（）取一个值，X轴上的值，两个值是X和Y

4. ### 缩放函数transform: scaleX(1.5) scaleY(0.5);

   1. transform: scale（一个值）X轴与Y轴一致缩放比例
   2. transform: scale（两个值）X轴与Y轴分开设置
   3. transform: scaleX(1.5)一个空格隔开scaleY(0.5);

5. ### 倾斜函数transform: skew(30deg);

   1. transform: skew(30deg);
   2. transform: skew(30deg,30deg);
   3. transform: skewY(30deg) skewX(30deg);

   > ### 变形属性取值注意事项

   > 1. 是一个复合函数，可以将不同种的变形同时取值，中间用空格隔开
   > 2. 注意，一个元素设置不同种变形，不要写多个变形函数，会发生覆盖

