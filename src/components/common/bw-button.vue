<template>
  <div class="overall">
    <!-- 按键点击效果 -->
    <div class="box">
		<div
			class="btn"
			@mousedown="downBtn"
			@mousemove="moveBtn()"
			@click="clickBtn()"
		>
        <span>{{ text }}</span>
        <div ref="cover" class="changeCover " :class="{active:animate}"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			hoverIndex: "",
			animate:false
		};
	},
	props: {
		text: {
			type: String,
			default: '登录'
        },
        disabled: {
			type: Boolean,
			default: false
		},
	},
	methods: {
		moveBtn() {
            if(!this.disabled) {
                this.animate = true
            }
			
		},
		downBtn(e) {
            if(!this.disabled) {
                let x = e.offsetX;
                let y = e.offsetY;
                this.$refs.cover.style.top = y + "px";
                this.$refs.cover.style.left = x + "px";
                this.animate = false
            }
			//   console.log(e);
			
		},
		clickBtn() {
            if(!this.disabled) {
                this.animate = true
                this.$emit('click')
            }
            
		}
	}
};
</script>

<style scoped lang="scss">
.box {
    display: flex;
    border: 1px solid $color;
    position: relative;
    z-index: 100;
    border-radius: 4px;
    height: 40px;
    box-sizing: border-box;
}
.box .btn {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    text-align: center;
    box-sizing: border-box;
    /* background: #dcf0ee; */
    color: $color;
    cursor: pointer;
    border-right: 1px solid $color;
    position: relative;
    overflow: hidden;
}
.box .btn:last-child {
    border-right: none;
}
.box .btn:hover span {
    transition: 0.5s;
    color: $color;
}
.changeCover {
    /* transition: 0.5s; */
    width: 1px;
    height: 1px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    border-radius: 50%;
    background: rgba(25, 137, 250, 0.267);
    transform: scale(0);
}
.active {
    transition: 0.7s;
    transform: scale(400);
    /* 使用动画，点击后背景色消失 */
    animation: change 0.7s ease both 1;
}
@keyframes change {
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(400);
        opacity: 0;
    }
}
</style>