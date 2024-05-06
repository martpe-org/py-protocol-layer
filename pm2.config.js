module.exports = {
  apps : [{
    name   : "py-protocol-layer",
    script : "./start.sh",
    instances: 1,
    max_memory_restart: '500M',
    interpreter: 'bash',
    env_prod: {
       ENV: "prod"
    },
    env_dev: {
       ENV: "dev"
    },
    env_pre_prod: {
       ENV: "pre_prod"
    }
    // exec_mode : "cluster"
  }]
}
