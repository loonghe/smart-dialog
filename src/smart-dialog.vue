<script lang="ts">
import { defineComponent } from "vue";

interface SampleData {
  counter: number;
  initCounter: number;
  message: {
    action: string | null;
    amount: number | null;
  };
  customInput: string;
}

export default /*#__PURE__*/ defineComponent({
  name: "SmartDialog", // vue component name
  data(): SampleData {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null,
      },
      customInput: "this is element-plus component",
    };
  },
  computed: {
    changedBy() {
      const { message } = this as SampleData;
      if (!message.action) return "initialized";
      return `${message.action} ${message.amount || ""}`.trim();
    },
  },
  methods: {
    increment(arg: Event | number): void {
      const amount = typeof arg !== "number" ? 1 : arg;
      this.counter += amount;
      this.message.action = "incremented by";
      this.message.amount = amount;
    },
    decrement(arg: Event | number): void {
      const amount = typeof arg !== "number" ? 1 : arg;
      this.counter -= amount;
      this.message.action = "decremented by";
      this.message.amount = amount;
    },
    reset(): void {
      this.counter = this.initCounter;
      this.message.action = "reset";
      this.message.amount = null;
    },
  },
});
</script>

<template>
  <div class="smart-dialog">
    <p>
      The counter was {{ changedBy }} to <b>{{ counter }}</b
      >.
    </p>
    <button @click="increment">Click +1</button>
    <button @click="decrement">Click -1</button>
    <button @click="increment(5)">Click +5</button>
    <button @click="decrement(5)">Click -5</button>
    <button @click="reset">Reset</button>
    <!-- 基于 element-plus 组件进行二次开发, <p></p>表示空行 -->
    <p></p>
    <hr />
    <el-input v-model="customInput" clearable placeholder="请输入..." />
  </div>
</template>

<style scoped lang="scss">
.smart-dialog {
  display: block;
  width: 400px;
  margin: 25px auto;
  border: 1px solid #ccc;
  background: #eaeaea;
  text-align: center;
  padding: 25px;
}
.smart-dialog {
  p {
    margin: 0 0 1em;
  }
}
</style>
