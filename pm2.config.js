module.exports = {
  apps : [{
    name   : "py-protocol-layer",
    script : "./start.sh",
    instances: 1,
    max_memory_restart: '500M',
    interpreter: 'bash',
    env_production: {
       ENV: "prod"
    },
    env_development: {
       ENV: "dev"
    },
    env_preprod: {
       ENV: "pre_prod"
    }
    // exec_mode : "cluster"
  }]
}
