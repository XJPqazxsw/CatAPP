<template>
	<view class="container">
		<uni-search-bar placeholder="搜索商品" v-model="keyWord" @confirm="doSearch"></uni-search-bar>
		<view class="" v-if="fals">
			<search :filPersons='filPersons'></search>
		</view>
		<view class="" v-else>
			<ul>
				<li v-for="(p,index) of filPersons" :key="index" @click="clickSearch(p)">
					{{p.name}}
				</li>
			</ul>
		</view>
		<view class="word" v-if="keyWord==''">
			<span>搜索记录</span>
			<span class="dele" @click="dodele">全部删除</span>
			<view class="" v-for="item in record ">
				<span class="recordname">
					<p @click="clickSearch1(item.value)">{{item.value}}</p>
				</span>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		requestGet
	} from '@/common/js/http.js';
	import search from "@/components/search/search.vue"

	export default {
		components: {
			search
		},
		data() {
			return {
				keyWord: '',
				fals: '0',
				alllist: [],
				filPersons: [],
				record: []
			}

		},

		created() {
			this.getLunbo();
			this.getSearchStorage()
		},
		computed: {

		},
		onLoad(){
			
		},
		methods: {
			async getLunbo() {
				let result = await requestGet("/user_skus");
				result.code == 200 ? this.alllist = result.lists : ""
				// uni.showLoading({
				// 	title: '加载中'
				// });
			},
			doSearch(val) {
				uni.showLoading({
					title: '加载中'
				});
				setTimeout(() => {
					uni.showToast({
						title: "加载成功",
						icon: "none",
						position: 'bottom',
						duration: 100
					})
					this.fals = 1;
					let searchArr = uni.getStorageSync('userInfo') || [];
					searchArr.unshift(val)
					uni.setStorageSync('userInfo', searchArr);
					
					
					let getData =uni.getStorageSync('userInfo')
					// 数组去重
					let setData = [...new Set(getData)]
					this.record = setData
					//延时关闭  加载中的 loading框
					uni.hideLoading()
				}, 100)

			},
			getSearchStorage() {
				let getData =uni.getStorageSync('userInfo')
				// 数组去重
				let setData = [...new Set(getData)]
				this.record = setData
			},

			dodele() {
				let removeDta=uni.removeStorageSync('userInfo');
				this.record = removeDta
			},
			clickSearch(p) {
				uni.showLoading({
					title: '加载中'
				});
				setTimeout(() => {
					uni.showToast({
						title: "加载成功",
						icon: "none",
						position: 'bottom',
						duration: 100
					})
					let searchArr = uni.getStorageSync('userInfo') || [];
					searchArr.unshift({
						value:p.name
					})
					uni.setStorageSync('userInfo', searchArr);
					
					
					let getData =uni.getStorageSync('userInfo')
					// 数组去重
					let setData = [...new Set(getData)]
					this.record = setData
					
					this.keyWord = p.name
					this.fals = 1;
					
					//延时关闭  加载中的 loading框
					uni.hideLoading()
				}, 100)
			},
			clickSearch1(p) {
				uni.showLoading({
					title: '加载中'
				});
				console.log(p)
				setTimeout(() => {
					uni.showToast({
						title: "加载成功",
						icon: "none",
						position: 'bottom',
						duration: 100
					})
					this.keyWord = p
					this.fals = 1;
					//延时关闭  加载中的 loading框
					uni.hideLoading()
				}, 100)
			}
		},
		watch: {
			keyWord: {
				immediate: true, //在框的值还没变化时执行如下函数显示出所有的情况
				handler(val) {
					this.filPersons = this.alllist.filter((p) => {
						return p.name.indexOf(val) !== -1
					})
					if (val == "") {
						this.filPersons = null
						this.fals = 0
					}
				},
			}

		}
	}
</script>

<style scoped lang="less">
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;

		.word {
			.recordname {
				margin-right: 10px;
				float: left;
			}

			.dele {
				font-size: 12px;
				float: right;
			}
		}
	}
</style>
