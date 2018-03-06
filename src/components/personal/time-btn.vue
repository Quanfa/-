<template id="timerBtn"  ref="btn">
	 <button @click="send" :class="{'btn':time > 0}" :disabled="time > 0">
        {{ text }}
     </button>
   
</template>

<script>
	export default {
		props: {
            second: {
                type: Number,
                default: 60
            }
        },
        data() {
            return {
                time: 0,
                btn: true
            }
        },
        methods: {
            send() {
                this.time = this.second
                this.timer()
                this.$emit('send')
            },
            timer() {
                if (this.time > 0) {
                    this.time = this.time - 1
                    setTimeout(this.timer, 1000)
                }
            }
        },
        created() {
			this.btn = this.time > 0;
		},
        computed: {
            text() {
                return this.time > 0 ? this.time + '秒后重新获取' : '获取验证码'
            }
        }
	};

       

 
</script>

<style lang="scss">
	#timerBtn{
		display: block;
		line-height: 40px;
		font-size: 16px;
		text-align: center;
	}
	
	
	
	
</style>