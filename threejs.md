/#几何体THREE.GEOmetry()必要的三维数据参数：
  1. this.vertices=[]
  2. this.colors=[]
  3. this.faces=[]
  然后利用数组的push(
    new THREE.vector3(),
    new THREE.vector3(),
    new THREE.vector3()
    )
-------
#材质。THREE.LineBasicMaterial
 1. Color:
 2. Linewidth:线条的宽度
 3. LineCAP:线条的两端的外观，默认圆角端点。
 4. Linejoin:两个线条的连接点处的外观，默认是round,表示圆角。
 5. VertexColors:布尔值，线条的各部分颜色根据顶点的颜色进行插值。
  renderer=new THREE.WEBGLRenderer({    这个WEBGLRenderer不支持线的宽度。只有CanvasRenderer类型的渲染器才支持线的宽度
    antialias:false抗锯齿。
    })
------


步骤：
   1. 样式 border=none;cursor是手指，背景颜色，宽高。
   2. 初始化three函数,
      1. 获取标签的宽高，
      2. new一个WEBGLrenderer不抗锯齿的renderer,并设置渲染器的宽高，并加入到标签中
      3. 渲染器粉刷一次 renderer.setClearColor(0xffffff,1.0)
      4. new一个透视相机并设置Z点的偏移
      5. new一个场景
      6. new一个直线灯光，并设置光源坐标点，然后添加到场景里面
      7. new几何体

#几何体：
  1. new一个geometry()形状。
  2. new 一个材质， LineBasicMaterial();
  3. new 两个颜色  new three.color(0x333333;ew three.color(0x333666);
  4. new 两个坐标。 new THREE.vector3(-100,0,0);new THREE.vector3(100,0,0);
  5. GEOmetry.vertices.push(坐标1);
  6. GEOmetry.vertices.push(坐标2);
  7. GEOmetry.colors.push(color1,color2);  
  8. new 一条线。new THREE.Line(GEOmetry,material,THREE.LineSegments(线的部分片段));  
  9. 场景里面加入线。

#webgl线的绘制方式。
