import TargetBasicInfo from '@/component/TargetBasicInfo';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Complaint',
  setup() {
    return () => (
      <div>
        <TargetBasicInfo userId={12} />
        <el-divider/>
        <el-form class="pl-2" size="small" >
          <el-form-item label="服务态度" prop="serverAttitude">
            <el-rate
              icon-classes={['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']}
              void-icon-class="icon-rate-face-off"
              colors={['#99A9BF', '#F7BA2A', '#FF9900']}
            />
          </el-form-item>
          <el-form-item label="着装规范" prop="dressCode">

          </el-form-item>
          <el-form-item label="办事效率" prop="workEfficiency">

          </el-form-item>
        </el-form>
      </div>
    );
  }
});