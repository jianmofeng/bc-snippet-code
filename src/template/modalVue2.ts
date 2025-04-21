/*
 * @Author: 贾晨昊
 * @Date: 2025-04-21 14:59:23
 * @LastEditors: 贾晨昊
 * @LastEditTime: 2025-04-21 14:59:29
 * @Description: 
 */
export const index = `import apiMount from "@/utils/apiMount";\nimport template from "./template.vue";\n\nconst caller = apiMount(template);\n\nexport default caller;`

export const template = `<template>\n  <a-modal\n    v-model:visible="visible"\n    title=""\n    title-align="start"\n    :render-to-body="false"\n    hide-cancel\n    width="800px"\n    :esc-to-close="false"\n    :closable="false"\n    :mask-closable="false"\n    @ok="handleOk"\n    @cancel="handleCancel"\n    @close="handleClose"\n  >\n\n  </a-modal>\n</template>\n\n<script lang="ts" setup>\nimport { ref, withDefaults, defineProps } from 'vue';\n\nconst props = withDefaults(defineProps(), {\n  close: () => {\n    return () => {};\n  },\n  resolve: () => {\n    return () => {};\n  },\n});\n\nlet type = '';\nconst visible = ref<boolean>(true);\n\nconst handleSuccess = () => {\n  type = 'reslove';\n  visible.value = false;\n};\n\nconst handleCancel = () => {\n  type = 'reject';\n  visible.value = false;\n};\n\nconst handleClose = () => {\n  if (type === 'reject') {\n    props.close();\n  } else {\n    props.resolve();\n  }\n};\n\nconst handleOk = () => {\n  handleSuccess();\n};\n</script>`