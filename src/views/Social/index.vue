<template>
  <div class="beidou">
     <div class="container">
      <div class="title">
        <h1>社会招聘</h1>
          <span>Experienced Recruitment</span>
          <p>社会招聘主要面向有一定工作经验的优秀人才。聚焦“零售 + 科技”战略，美团为优秀人才提供了更丰富的机会、更广阔的发展空间，欢迎大家与我们一起在多元的业务场景中学习实践，一起“帮大家吃得更好，生活更好”！</p>
          <p>更多疑问可以浏览《常见问题》页面，也可以前往《了解美团》</p>

          <!-- 搜索框 -->
          <div class=search>
            <!-- <label for="search">关键词:</label> -->
            <input type="text" id="search" v-model="searchKeyword" placeholder="输入职位关键词">
            <button @click="searchJobs">搜索</button>
          </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="job-filter">
      <div class="filter-criteria">
        <h2>职位筛选</h2>
        <div>
          <label for="city">城市:</label>
          <select v-model="selectedCity" id="city">
            <option value="">全部</option>
            <option v-for="city in cities" :key="city" :value="city">
              {{ city }}
            </option>
          </select>
        </div>
        <div>
          <label for="category">职位类别:</label>
          <select v-model="selectedCategory" id="category">
            <option value="">全部</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
      </div>
      <div class="job-list-box">
        <ul class="job-list">
          <li v-for="job in paginatedJobs" :key="job.id" class="job-item" @click="goToJobDetail(job.id)">
            <h3>{{ job.title }}</h3>
            <p>城市: {{ job.city }}</p>
            <p>类别: {{ job.category }}</p>
            <p>{{ job.description }}</p>
          </li>
        </ul>
        <el-pagination
        @current-change="handlePageChange"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="filteredJobs.length"
        :current-page="currentPage"
      >
      </el-pagination>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// 模拟的职位数据
const jobs = ref([
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
]);

// 用户选择筛选的城市和类别
const selectedCity = ref('');
const selectedCategory = ref('');
const searchKeyword = ref('');

const filteredJobs = computed(() => {
  return jobs.value.filter(job => 
    (selectedCity.value === '' || job.city === selectedCity.value) &&
    (selectedCategory.value === '' || job.category === selectedCategory.value) &&
    (job.title.includes(searchKeyword.value) || job.description.includes(searchKeyword.value))
  );
});

// 搜索职位的方法
const searchJobs = () => {
  // 由于计算属性 filteredJobs 依赖 searchKeyword，此处无需手动重新计算
  // filteredJobs 的值会自动更新
};

// 职位类别和城市列表
const categories = ref(['技术', '产品', '设计', '市场']);
const cities = ref(['北京', '上海', '广州', '深圳']);

// 使用 Vue Router
const router = useRouter();
const route = useRoute();

const goToJobDetail = (jobId) => {
  // 假设详情页的路由路径为 /detail/:id
  router.push({ name: 'Detail', params: { id: jobId.toString() } });
};

// 当前页码
const currentPage = ref(1);

// 每页显示的职位数量
const pageSize = 5;

// 现在基于 filteredJobs 来计算每页的职位
const paginatedJobs = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredJobs.value.slice(start, end);
});

// 页码改变时触发
const handlePageChange = (newPage) => {
  currentPage.value = newPage;
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滚动
    });
};
</script>

<style scoped>
.beidou {
 background-image: url(@/assets/images/social.png);
}
.container {
  margin: 0 auto;
  width: 1280px;
}
.title {
 
  height: 476px;
}
.title h1,span,p {
  color: white;
}
h1 {
  font-size: 40px;
  padding-top: 100px;
}
.title span {
  font-size: 18px;
  color:#e1e6eab0;
}
p {
  display: block;
  width: 740px;
  padding-top: 10px;
  font-size: 14px;
}
.title .search {
  height: 60px;
  width: 600px;
  margin-top: 36px;
  border-radius: 30px;
  background-color: white;
}
input {
  position: relative;
  width: 544px;
  height: 60px;
  border-radius: 30px;
  border: 0;
  font-size: 20px;
  padding-left: 30px;
}
input:focus {
  outline: none; /* 移除边框 */
  box-shadow: none; /* 移除阴影 */
  border-color: transparent; /* 将边框设置为透明 */
}
button {
  position: relative;
  bottom: 2px;
  width: 52px;
  height:52px;
  background-color: #ffd100;
  border: 0;
  border-radius: 26px;
}

.job-filter {
  display: flex;
  margin: 20px;
}

.filter-criteria {
  flex:1;
  margin-bottom: 20px;
}

.filter-criteria > div {
  margin-right: 10px;
}

.job-list {
  list-style: none;
  padding: 0;
  color:black;
}
.job-list p,h3 {
  color:black;
}
.job-item {
  border-bottom: 1px solid #eee;
  padding: 10px;
}

.job-item h3 {
  margin: 0 0 10px;
}

.job-item p {
  margin: 5px 0;
}

.job-list-box {
  flex:3;
}
.job-list li {
  margin: 20px 0;
  border-radius: 20px;
  padding: 20px 20px;
}
.job-list li:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
</style>