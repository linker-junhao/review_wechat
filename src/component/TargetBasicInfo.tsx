import { getUserInfo } from "@/api";
import { computed, unref } from "vue";
import { onMounted, ref, watch } from "vue";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: 'TargetBasicInfo',
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  setup ({userId}) {
    const info = reactive({
      "id": 0,
      "avatar": "https://avatars.githubusercontent.com/u/15519222?v=4",
      "projectName": '--',  // 员工所属项目名
      "teamName": "--",  // 员工所属团队名
      "regionName": "--",  // 员工所属区域、楼层
      "staffName": '--',
      "staffNo": '--' // 员工工号
    })
    const userIdRef = ref(userId)
    watch(userIdRef, (cur, pre) => {
      console.log(cur, pre)
      // getUserInfo().then(res => {
      //   console.log(res)
      // })
    }, {
      immediate: true
    })

    return () => (
      <div>
        <el-descriptions class="mt-4" column={1} size="small" border>
          <el-descriptions-item v-slots={{
            label: () => {
              return '照片'
            }
          }}>
            <el-image
              style="height: 64px"
              src={info.avatar}
              fit="scale-down"
            />
          </el-descriptions-item>
          <el-descriptions-item v-slots={{
            label: () => {
              return '姓名'
            }
          }}>
            {info.staffName}
          </el-descriptions-item>
          <el-descriptions-item v-slots={{
            label: () => {
              return '工号'
            }
          }}>
            {info.staffNo}
          </el-descriptions-item>
          <el-descriptions-item v-slots={{
            label: () => {
              return '项目'
            }
          }}>
            {info.projectName}
          </el-descriptions-item>
          <el-descriptions-item v-slots={{
            label: () => {
              return '团队'
            }
          }}>
            {info.teamName}
          </el-descriptions-item>
          <el-descriptions-item v-slots={{
            label: () => {
              return '区域'
            }
          }}>
            {info.regionName}
          </el-descriptions-item>
        </el-descriptions>
      </div>
    )
  }
})