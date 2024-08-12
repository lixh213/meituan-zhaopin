<template>
<div class="beidou">
     <div class="container">
      <div class="title">
        <h1>校园招聘</h1>
          <span>Campus Recruitment</span>
          <p>美团有多少年，校招就有多少年。美团创立之初，就开始招聘和培养应届生了，很多当年的应届生已经成长为业务骨干、团队负责人，成为美团的中流砥柱。 目前，校园招聘设有应届生校招、转正实习、日常实习等招聘项目。无论你在哪个年级、学什么专业，都有机会来美团学习实践，和我们一起成长，一起更好！</p>
          <p>更多疑问请查看《校招行程》、《常见问题》页面，也可以前往《了解美团》</p>

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
  { id: 1, title: '前端工程师', city: '北京', category: '技术', description: '负责公司前端开发工作' },
  { id: 2, title: '后端工程师', city: '上海', category: '技术', description: '负责公司后端开发工作' },
  { id: 3, title: '测试工程师', city: '北京', category: '技术', description: '负责软件测试和质量保证' },
  { id: 4, title: '数据分析师', city: '上海', category: '技术', description: '进行数据分析和数据挖掘工作' },
  { id: 5, title: '项目经理', city: '广州', category: '产品', description: '负责项目规划、执行和监控' },
  { id: 6, title: 'UI/UX设计师', city: '深圳', category: '设计', description: '负责用户界面和用户体验设计' },
  { id: 7, title: '产品经理', city: '杭州', category: '产品', description: '负责产品规划、设计和迭代' },
  { id: 8, title: '运维工程师', city: '成都', category: '技术', description: '负责系统运维和维护' },
  { id: 9, title: '安全工程师', city: '武汉', category: '技术', description: '负责网络安全和风险评估' },
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
};
</script>

<style scoped>
.beidou {
 background-image: url(@/assets/images/campus.png);
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