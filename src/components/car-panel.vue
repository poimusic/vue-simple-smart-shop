<template>
  <li class="nav-cart" @mouseenter="carShowhandle" @mouseleave="carHidehandle">
  	<a href="javascript:;">购物车</a>
  	<!--根据class改变颜色-->
  	<span class="cart-empty-num" :class="{'cart-num':count>0}">
  		<i>{{count}}</i>
  	</span>
  	<div class="nav-cart-wrapper" v-if="carShow">
  		<div class="nav-cart-list">
  			<div class="empty" v-if="count<=0">
  				<h3>购物车为空</h3>
  				<p>您还没有选购任何商品，现在前往商城选购吧!</p>
  			</div>
  			<div class="full" v-else>
  				<div class="nav-cart-items">
  					<ul>
  						<li class="clear"  v-for="(item,index) in carPanelData" :key = 'index'>
  							<div class="cart-item js-cart-item cart-item-sell">
  								<div class="cart-item-inner">
  									<div class="item-thumb">
  										<img :src="item.ali_image">
  									</div>
  									<div class="item-desc">
  										<div class="cart-cell">
  											<h4>
  												<a href="#/item/100027401">{{item.title}}</a>
  											</h4>
  											<p class="attrs">
  												<span>{{item.spec_json.show_name}}</span>
  											</p>
  											<h6>
  												<span class="price-icon">¥</span><span class="price-num">{{item.price}}</span>
                          <span class="item-num">* {{item.count}}</span>
  											</h6>
  										</div>
  									</div>
  									<div class="del-btn" @click="delCarPanelData(item.sku_id)">删除</div>
  								</div>
  							</div>
  						</li>
  					</ul>
  				</div>
  				<div class="nav-cart-total">
  					<p>共 <strong class="ng-binding">{{count}}</strong> 件商品</p>
  					<h5>合计：<span class="price-icon">¥</span><span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">{{totle}}</span></h5>
  					<h6>
              <router-link to='/Cart' class="nav-cart-btn">去购物车</router-link>
  					</h6>
  				</div>
  			</div>
  		</div>
  	</div>
  </li>
</template>

<script>
  export default {
    computed:{
      carPanelData(){
        return this.$store.state.carPanelData
      },
      count(){
        return this.$store.getters.totalCount
      },
      totle(){
        return this.$store.getters.totalPrice
      },
      carShow(){
         return this.$store.state.carShow
      }
    },
    methods:{
      delCarPanelData(id){
        this.$store.commit('delCarPanelData',id)
      },
      carShowhandle(){
        this.$store.commit('showCar')
      },
      carHidehandle(){
        this.$store.commit('hideCar')
      }
  }
}
</script>

<style>

</style>
