<template>
	<div class="carousel-wrap" id="carousel">
		<transition-group tag='ul' class='slide-ul' name='list'>
			<li v-for="(list,index) in slideList" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go" :key='index'>
				<a :href="list.clickUrl">
					<img :src="list.image" :alt="list.desc" />
				</a>
			</li>
		</transition-group>
		<div class="carousel-items">
			<span v-for="(item,index) in slideList.length" :class="{'active':index === currentIndex}" @mouseover="change(index)" :key='index'>

			</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				slideList:[
					{
						'clickUrl' : '#',
						'desc' : '第一张图',
						'image' : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563880729888&di=7baf2b4be096cc2a19bb47373454e83f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201504%2F23%2F20150423H1829_wZthR.jpeg'
					},
					{
						'clickUrl' : '#',
						'desc' : '第二张图',
						'image' : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563880720809&di=40d51ab9a2d3a341c942c8c925186155&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201504%2F23%2F20150423H1927_HrzhQ.jpeg'
					},
					{
						'clickUrl' : '#',
						'desc' : '第三张图',
						'image' : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564475437&di=ef17488af5d5fe59d997f6c486759030&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201504%2F23%2F20150423H2041_P8W4Z.thumb.700_0.jpeg'
					},
					{
						'clickUrl' : '#',
						'desc' : '第四张图',
						'image' : 'http://pic.rmb.bdstatic.com/6e4342624c746bbaf281d8f09b17ca83.jpeg'
					},
					{
						'clickUrl' : '#',
						'desc' : '第五张图',
						'image' : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563880895869&di=c076f2d99f45220524fb289b8653fa66&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F22%2F20160422185500_iHKYB.jpeg'
					}
				],
				currentIndex:0,
				timer: ''
			}
		},
		methods:{
			// 开始
			 go() {
                this.timer = setInterval(() => {
                    this.autoPlay()
                }, 3000)
            },
            //停止
            stop() {
                clearInterval(this.timer)
                this.timer = null
            },
            //改变
            change(index) {
                this.currentIndex = index
            },
            //自动
            autoPlay() {
                this.currentIndex++
                if (this.currentIndex > this.slideList.length - 1) {
                    this.currentIndex = 0
                }
            }
		},
		created() {
			//异步处理
         this.$nextTick(() => {
           this.timer = setInterval(() => {
             this.autoPlay()
           }, 3000)
         })
       }
	}
</script>

<style>
 .carousel-wrap {
   height: 453px;
   width: 100%;
   overflow: hidden;
   background-color: #fff;
   border-radius: 10px;
}

.slide-ul {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-ul li {
  position: absolute;
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
}

.carousel-items {
  position: absolute;
  z-index: 10;
  top: 380px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
}

.carousel-items span {
  display: inline-block;
  height: 6px;
  width: 30px;
  margin: 0 3px;
  background-color: #b2b2b2;
  cursor: pointer;
}
.carousel-items .active {
  background-color: orange;
}

.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.list-enter {
  transform: translateX(100%)
}

.list-leave {
  transform: translateX(0)
}
</style>
