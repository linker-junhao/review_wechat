import TargetBasicInfo from '@/component/TargetBasicInfo';
import { defineComponent, reactive, ref, withModifiers } from 'vue';

export default defineComponent({
  name: 'Review',
  setup() {
    const reviewForm = reactive({
      'wxId': 'asdfs', // 评价者微信id
      "userId": 1, // {int} 用户id 从二维码链接装获取
      "fileList": [
        "path/image1.png" // {string} 图片上传成功后返回值，相对路径
      ],
      "serverAttitude": 3, // {int} 服务态度 0-100
      "dressCode": 3, // {int} 着装规范
      "workEfficiency": 3, // {int} 办事效率
      "comment": "评论文本内容" // {string} 评论文本内容
    })

    const ratePropsCommon = {
      allowHalf: true,
      iconClasses: ['el-icon-star-on text-2xl', 'el-icon-star-on text-2xl', 'el-icon-star-on text-2xl'],
      voidIconClass: 'el-icon-star-off text-2xl',
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
    }

    return () => (
      <div>
        <TargetBasicInfo userId={12} />
        <el-divider/>
        <div class="pl-2 pr-2">
          <el-form size="small" model={reviewForm} >
            <el-form-item label="服务态度" prop="serverAttitude">
              <el-rate
                modelValue={reviewForm.serverAttitude}
                onChange={(val: any) => {
                  reviewForm.serverAttitude = val
                }}
                {
                  ...ratePropsCommon
                }
              />
            </el-form-item>
            <el-form-item label="着装规范" prop="dressCode">
              <el-rate
                modelValue={reviewForm.dressCode}
                onChange={(val: any) => {
                  reviewForm.dressCode = val
                }}
                {
                  ...ratePropsCommon
                }
              />
            </el-form-item>
            <el-form-item label="办事效率" prop="workEfficiency">
              <el-rate
                modelValue={reviewForm.workEfficiency}
                onChange={(val: any) => {
                  reviewForm.workEfficiency = val
                }}
                {
                  ...ratePropsCommon
                }
              />
            </el-form-item>
            <el-form-item prop="comment">
              <el-input
                modelValue={reviewForm.comment}
                onInput={(val: any) => {
                  reviewForm.comment = val
                }}
                type="textarea"
                placeholder="其它想说的..." />
            </el-form-item>
          </el-form>
          <div class="grid grid-cols-2">
            <el-button>投诉</el-button>
            <el-button type="primary">评价</el-button>
          </div>
        </div>
      </div>
    );
  }
});