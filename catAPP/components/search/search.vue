<template>
	<view class="list">
		<view class="item" v-for="(p,index) in filPersons" :key="index">
			<view class="itemcontent">
				<image :src="urlimg+p.img"></image>
				<view class="price">
					<text>{{p.name}}</text>
				</view>
				<text class="text1">{{p.introduction}}</text>
				<p>
					<span>{{p.price}}</span>
					<span>{{p.market_price}}</span>
				</p>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				urlimg: 'https://7n.oripetlife.com/',
			}
		},
		props: {
			filPersons: {
				type: Array,
			},
		},
	}
</script>

<style scoped lang="less">
	.list {
		background-color: white;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		.item {
			width: 50%;
			height: inherit;
			padding: 4px;
			box-sizing: border-box;

			.itemcontent {
				background-color: white;
				display: flex;
				flex-direction: column;
				padding: 6px;
				box-sizing: border-box;

				image {
					width: 100%;
					height: 250rpx;

				}

				.text1 {
					color: #8f99a7;
					font-size: 13px;
					margin-top: 5px;
				}

				.price {
					font-size: 15px;
					font-weight: 700;
					font-family: '黑体';
					color: black;
					padding: 8px 0;
				}

				.name {
					font-size: 14px;
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden; //溢出内容隐藏
					text-overflow: ellipsis; //文本溢出部分用省略号表示
					display: -webkit-box; //特别显示模式
					-webkit-line-clamp: 2; //行数
					line-clamp: 2;
					-webkit-box-orient: vertical; //盒子中内容竖直排列

				}
			}
		}
	}
</style>
