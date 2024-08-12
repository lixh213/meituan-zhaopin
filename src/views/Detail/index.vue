<template>
  <div class="job-detail">
    <div class="job-details">
      <h2>{{ job.title }}</h2>
      <p><strong>城市:</strong> {{ job.city }}</p>
      <p><strong>类别:</strong> {{ job.category }}</p>
      <p><strong>描述:</strong> {{ job.description }}</p>
      <!-- 可以添加更多职位相关的信息 -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

// 假设的静态职位数据
const staticJobsData = [
  { id: '1', title: '【北斗】前端工程师', city: '北京', category: '技术', description: '负责公司前端开发工作' },
  { id: '2', title: '【北斗】后端工程师', city: '上海', category: '技术', description: '负责公司后端开发工作' },
  { id: 3, title: '【北斗】产品经理', city: '广州', category: '产品', description: '负责产品规划和设计' },
  { id: 4, title: '【北斗】UI设计师', city: '深圳', category: '设计', description: '负责用户界面设计' },
  { id: 5, title: '【北斗】市场分析师', city: '北京', category: '市场', description: '负责市场数据的收集和分析' },
  { id: 6, title: '【北斗】测试工程师', city: '上海', category: '技术', description: '负责软件测试和质量保证' },
  { id: 7, title: '【北斗】数据科学家', city: '杭州', category: '技术', description: '负责数据分析和挖掘' },
  { id: 8, title: '【北斗】运营专员', city: '成都', category: '市场', description: '负责产品运营和用户增长' },
  { id: 9, title: '【北斗】客户关系经理', city: '广州', category: '市场', description: '负责客户关系维护和拓展' },
  { id: 10, title: '【北斗】项目经理', city: '深圳', category: '产品', description: '负责项目规划和管理' },
  { id: 21, title: '前端工程师', city: '北京', category: '技术', description: '负责公司前端开发工作' },
  { id: 22, title: '后端工程师', city: '上海', category: '技术', description: '负责公司后端开发工作' },
  { id: 23, title: '测试工程师', city: '北京', category: '技术', description: '负责软件测试和质量保证' },
  { id: 24, title: '数据分析师', city: '上海', category: '技术', description: '进行数据分析和数据挖掘工作' },
  { id: 25, title: '项目经理', city: '广州', category: '产品', description: '负责项目规划、执行和监控' },
  { id: 26, title: 'UI/UX设计师', city: '深圳', category: '设计', description: '负责用户界面和用户体验设计' },
  { id: 27, title: '产品经理', city: '杭州', category: '产品', description: '负责产品规划、设计和迭代' },
  { id: 28, title: '运维工程师', city: '成都', category: '技术', description: '负责系统运维和维护' },
  { id: 29, title: '安全工程师', city: '武汉', category: '技术', description: '负责网络安全和风险评估' },
  { id: 10, title: '数据库管理员', city: '西安', category: '技术', description: '管理数据库系统，确保数据安全和高效访问' },
  { id: 11, title: '市场分析师', city: '重庆', category: '市场', description: '分析市场趋势，为市场策略提供数据支持' },
  { id: 12, title: '客户关系经理', city: '苏州', category: '市场', description: '维护客户关系，拓展业务合作' },
  { id: 13, title: '行政助理', city: '南京', category: '行政', description: '负责日常行政事务和办公室管理' },
  { id: 14, title: '财务分析师', city: '天津', category: '财务', description: '进行财务分析，提供财务报告和建议' },
  { id: 15, title: '人力资源专员', city: '长沙', category: '人力资源', description: '负责招聘、员工关系和培训发展' },
  { id: 16, title: '法务顾问', city: '郑州', category: '法务', description: '提供法律咨询和合同审核服务' },
  { id: 17, title: '供应链管理', city: '大连', category: '供应链', description: '管理供应链流程，优化库存和物流' },
  { id: 18, title: '商务拓展经理', city: '青岛', category: '市场', description: '负责商务合作和市场拓展' },
  { id: 19, title: '内容运营', city: '厦门', category: '运营', description: '负责内容策划和运营管理' },
  { id: 31, title: '移动开发工程师', city: '北京', category: '技术', description: '负责移动应用的开发和维护。' },
  { id: 32, title: '机器学习工程师', city: '上海', category: '技术', description: '研究和开发机器学习算法。' },
  { id: 33, title: '云服务架构师', city: '广州', category: '技术', description: '设计和实现云服务架构。' },
  { id: 34, title: '全栈工程师', city: '深圳', category: '技术', description: '负责前端和后端的全栈开发。' },
  { id: 35, title: '业务分析师', city: '杭州', category: '产品', description: '分析业务需求，提供解决方案。' },
  { id: 36, title: '交互设计师', city: '成都', category: '设计', description: '设计产品的交互流程和界面元素。' },
  { id: 37, title: '品牌经理', city: '武汉', category: '市场', description: '负责品牌建设和市场推广。' },
  { id: 38, title: '公关专员', city: '西安', category: '市场', description: '处理公共关系和媒体沟通。' },
  { id: 39, title: '投资分析师', city: '重庆', category: '财务', description: '分析投资机会和风险。' },
  { id: 40, title: '合规经理', city: '苏州', category: '法务', description: '确保公司业务遵守法律法规。' },
  { id: 41, title: '销售代表', city: '南京', category: '销售', description: '负责产品的市场销售和客户关系维护。' },
  { id: 42, title: '技术支持工程师', city: '天津', category: '客服', description: '提供客户技术支持和解决方案。' },
  { id: 43, title: '采购专员', city: '长沙', category: '采购', description: '负责公司的采购流程和供应商管理。' },
  { id: 44, title: '培训师', city: '郑州', category: '人力资源', description: '设计和实施员工培训计划。' },
  { id: 45, title: '质量控制专员', city: '大连', category: '质量控制', description: '确保产品质量符合标准。' },
  { id: 46, title: '项目经理助理', city: '青岛', category: '产品', description: '协助项目经理进行项目管理工作。' },
  { id: 47, title: '内容编辑', city: '厦门', category: '内容', description: '负责内容创作和编辑工作。' },
  { id: 48, title: 'SEO专家', city: '济南', category: '市场', description: '负责搜索引擎优化和提高网站排名。' },
  { id: 49, title: '客户服务经理', city: '宁波', category: '客服', description: '管理客户服务团队，提高客户满意度。' },
  { id: 40, title: '数据可视化工程师', city: '无锡', category: '技术', description: '负责数据的可视化展示和分析工具的开发。' },
  // 更多职位...
  // 可以添加更多职位数据
];

// 从路由参数中获取职位ID
const route = useRoute();
const jobId = ref(route.params.id);

// 根据ID获取职位详情
const job = ref(null);
const findJobById = (id) => {
  const foundJob = staticJobsData.find(job => job.id.toString() === id);
  if (foundJob) {
    job.value = foundJob;
  } else {
    // 可以在这里处理未找到职位的情况，例如设置 job.value 为 null 并显示一个消息
    console.error('职位未找到');
  }
};

// 组件挂载后获取职位详情
findJobById(jobId.value);
</script>

<style scoped>
.job-detail {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.job-details h2 {
  margin-top: 0;
}

/* 其他样式定义 */
</style>