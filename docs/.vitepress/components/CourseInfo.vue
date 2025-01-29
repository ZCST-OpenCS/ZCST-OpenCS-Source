<template>
    <div class="course-stats">
        <!-- 顶部学分信息 -->
        <div class="stats-row">
            <span class="tag exam-type">{{ examType }}</span>
            <div class="tag split-tag">
                <span class="label">学分</span>
                <span class="separator">|</span>
                <span class="value">{{ credits }}</span>
            </div>
            <div class="tag split-tag">
                <span class="label">学时</span>
                <span class="separator">|</span>
                <span class="value">{{ hours }}</span>
            </div>
                <!-- 授课教c -->
                <div class="tag instructor" v-if="showInstructor">
                    <span class="value">{{ instructor }}</span>
                    <span class="separator">|</span>
                    <span class="label">&nbsp;授课</span>
                </div>
        </div>

        <!-- 成绩构成 -->
        <div class="grade-breakdown" v-if="showFinalGradeComponents">
            <span class="tag year">成绩构成 ({{ year }})</span>
            <div class="breakdown-items">
                <div class="tag split-tag" v-for="(value, name) in breakdown" :key="name">
                    <span class="label">{{ name }}</span>
                    <span class="separator">|</span>
                    <span class="value">{{ value }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    instructor: {
        type: String,
        default: "张三 "
    },
    credits: {
        type: Number,
        default: 2.5
    },
    hours: {
        type: Number,
        default: 48
    },
    year: {
        type: Number,
        default: 2024
    },
    breakdown: {
        type: Object,
        default: () => ({
            '课堂表现': '10%',
            '课程论文': '10%',
            '小组汇报': '20%',
            '期末考试': '50%'
        })
    },
    examType: {
        type: String,
        default: '考试类'
    },
    showInstructor: {
    type: Boolean,
    default: false
    },
    showFinalGradeComponents: {
    type: Boolean,
    default: true
    }
})
</script>

<style scoped>
.course-stats {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    font-size: 12px;
}

.stats-row {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    flex-wrap: wrap;
}

.tag {
    padding: 2px 8px;
    border-radius: 12px;
    display: inline-flex;
    align-items: center;
    height: 22px;
    font-weight: 500;
}

.split-tag {
    background-color: #f5f7fa;
    padding: 2px 10px;
    gap: 4px;
}

.split-tag .label {
    color: #909399;
}

.split-tag .separator {
    color: #dcdfe6;
}

.split-tag .value {
    color: #409eff;
    font-weight: 600;
}

.exam-type {
    background-color: #ff6b6b;
    color: white;
}

.instructor {
    background-color: #00000048;
    /* color: white; */
}
.instructor .label {
    font-weight: 350;
    color: #ffffffd5;
}
.instructor .separator {
    color: #9b9898c5;
}
.instructor .value {
    font-weight: 1100;
    color: #fdd210c5;
}

.year {
    background-color: #fff3e0;
    color: #fb8c00;
}

.grade-breakdown {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    flex-wrap: wrap;
}

.breakdown-items {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
}

.breakdown-items .split-tag {
    background-color: #e3f2fd;
}

.breakdown-items .split-tag .label {
    color: #1976d2;
}

.breakdown-items .split-tag .separator {
    color: #90caf9;
}

.breakdown-items .split-tag .value {
    color: #1976d2;
}
</style>