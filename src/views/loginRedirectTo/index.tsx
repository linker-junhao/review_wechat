import TargetBasicInfo from '@/component/TargetBasicInfo';
import { ElLoading, ElMessage } from 'element-plus';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginRedirectTo',
  props: {
    path: {
      type: String,
      required: true
    }
  },
  beforeMount () {
    const {token} = this.$route.query
    if(!token) {
      ElMessage.warning('没有授权登陆信息！')
    } else {
      localStorage.setItem('token', token as string)
      const loading = ElLoading.service({ fullscreen: true, text: '登陆跳转中...' })
      setTimeout(() => {
        loading.close()
        this.$router.push({
          path: `/${this.path}`
        })
      }, 1200)
    }
  },
  setup() {
    return () => (
      <div />
    );
  }
});