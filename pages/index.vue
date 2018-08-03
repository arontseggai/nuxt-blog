<template>
  <div class="home-page container">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>

import PostList from '~/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  asyncData() {
    return {
      loadedPosts: [
        {
          id: 1,
          title: "fwefwef",
          thumbnail: "https://lh3.googleusercontent.com/Lhj5ZAYpoGe1WpOWzZHXbEqpKKGug7STCllMqYTGb2lQGv2WfRhoH4HFiDspRcUQ2nTCPq-S9WfFSyFnquUWiEw89zctiUYb6F-zAhiPdptpWPPr6b8PKMFI_yZwpmVnEmOea7UB84OVuVkRMHS8hfqgE8bMJA3WErW2QZ-pklnaRfzMd8s7fQqeZG1QwEk75bVWJPZuqDxTINN99ZRR_ItsXFsKe7jcITYNkTKimXuWGfv_sQuSJ-4bWY3IR_MKqmYyhLUHbaRqhmiqCGYrIVz4iZAum_CyxDHFl-qs0TB5-6eJU-y9iif30GJg4rM6dkAb8L6QXgq5BxrTOF6RNzoFYeuGnc_6pWK4OFri1vjbU0TjF6HyszHugGVLkAeZQVXBQCzGZaSQ1UJ0UHVVcM2olYV_QMQ54ZZo5bmssRb1yGxxKxyHfgNrKpPdjQGkDwNTHd9wzSLgdbNQCR6JU-zyEcuQwYJHG7RYHUQX6wDAHIG1NbRskUJ2iARsl67ieumFxaAQEeM9m_yTwlIZ1ro_xvs53UpRSQarOtNOAgNb5NtWfQPja4riu8uLPKJQ2RS6nc2WjLoKzh3llSFy_eb6usZzOAT9kRWUZbZ3=w899-h1599-no",
          previewText: "efjwnfjwefn efjnwefkj wejfn kejwfn ejfnwejfn"
        },
        {
          id: 2,
          title: "fwefwef",
          thumbnail: "https://lh3.googleusercontent.com/Lhj5ZAYpoGe1WpOWzZHXbEqpKKGug7STCllMqYTGb2lQGv2WfRhoH4HFiDspRcUQ2nTCPq-S9WfFSyFnquUWiEw89zctiUYb6F-zAhiPdptpWPPr6b8PKMFI_yZwpmVnEmOea7UB84OVuVkRMHS8hfqgE8bMJA3WErW2QZ-pklnaRfzMd8s7fQqeZG1QwEk75bVWJPZuqDxTINN99ZRR_ItsXFsKe7jcITYNkTKimXuWGfv_sQuSJ-4bWY3IR_MKqmYyhLUHbaRqhmiqCGYrIVz4iZAum_CyxDHFl-qs0TB5-6eJU-y9iif30GJg4rM6dkAb8L6QXgq5BxrTOF6RNzoFYeuGnc_6pWK4OFri1vjbU0TjF6HyszHugGVLkAeZQVXBQCzGZaSQ1UJ0UHVVcM2olYV_QMQ54ZZo5bmssRb1yGxxKxyHfgNrKpPdjQGkDwNTHd9wzSLgdbNQCR6JU-zyEcuQwYJHG7RYHUQX6wDAHIG1NbRskUJ2iARsl67ieumFxaAQEeM9m_yTwlIZ1ro_xvs53UpRSQarOtNOAgNb5NtWfQPja4riu8uLPKJQ2RS6nc2WjLoKzh3llSFy_eb6usZzOAT9kRWUZbZ3=w899-h1599-no",
          previewText: "efjwnfjwefn efjnwefkj wejfn kejwfn ejfnwejfn"
        },
        {
          id: 3,
          title: "fwefwef",
          thumbnail: "https://lh3.googleusercontent.com/Lhj5ZAYpoGe1WpOWzZHXbEqpKKGug7STCllMqYTGb2lQGv2WfRhoH4HFiDspRcUQ2nTCPq-S9WfFSyFnquUWiEw89zctiUYb6F-zAhiPdptpWPPr6b8PKMFI_yZwpmVnEmOea7UB84OVuVkRMHS8hfqgE8bMJA3WErW2QZ-pklnaRfzMd8s7fQqeZG1QwEk75bVWJPZuqDxTINN99ZRR_ItsXFsKe7jcITYNkTKimXuWGfv_sQuSJ-4bWY3IR_MKqmYyhLUHbaRqhmiqCGYrIVz4iZAum_CyxDHFl-qs0TB5-6eJU-y9iif30GJg4rM6dkAb8L6QXgq5BxrTOF6RNzoFYeuGnc_6pWK4OFri1vjbU0TjF6HyszHugGVLkAeZQVXBQCzGZaSQ1UJ0UHVVcM2olYV_QMQ54ZZo5bmssRb1yGxxKxyHfgNrKpPdjQGkDwNTHd9wzSLgdbNQCR6JU-zyEcuQwYJHG7RYHUQX6wDAHIG1NbRskUJ2iARsl67ieumFxaAQEeM9m_yTwlIZ1ro_xvs53UpRSQarOtNOAgNb5NtWfQPja4riu8uLPKJQ2RS6nc2WjLoKzh3llSFy_eb6usZzOAT9kRWUZbZ3=w899-h1599-no",
          previewText: "efjwnfjwefn efjnwefkj wejfn kejwfn ejfnwejfn"
        },
        {
          id: 4,
          title: "fwefwef",
          thumbnail: "https://lh3.googleusercontent.com/2RfgkZWlAo0bCsh0-3bh-fi8ozHnbzDAR9g0Zs-R4LRBVc_VV2XVjchbykJAznnZ2FncSW3rB5wq31IUAaUYskhS_uoICdwE-S2oa7oryob-j80mjem-SHvq-op9ZQwBP5oZqZX4EHc790hqpVKa8vHNYQ243HKfTS3tkqkzHP4q3LGSwqxdy88QHKBZyeQuK3uE7WOaD0QONWYbQmwxEJ5fjh9D-ugCoDfdPt7P2leowiN16LF7t4L6VBZU6ONkL5Z0yDg1XR-084M4dMtwpzUuroOOrPS_0gYWdLrh_gAQFDwyqEijj2mOHJG9HWKyiWCpXqCeBFATnwKDwehnSq9Q7FEIQoJSWrVDLdQj0SwwgQN0-fIs0xfMBChwwnFH8WFU0xP0F2OXOTH5m9Pc9gCOPxZBAKkFdCi4WnR9mx6rQw7e35NrRAF0j-wLjMwOrMwOxWHsETHNMUmB_jfvjPDVdvOdskc6VFGtiOZQVX9w2SMw6_kx4RDF85gzronp52erSEEK84w6mO0frgs2lc_Ad3EZyKFNfn7gdJhEThTnBwztzrFzZW6LtoR6Ng-gup08pjnz5ExFo40k59QaNliu1P5QPhIJjsGycOf6=w720-h1280-no",
          previewText: "efjwnfjwefn efjnwefkj wejfn kejwfn ejfnwejfn"
        }
      ]
    }
  }  
}
</script>