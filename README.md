# Introduction

- Protocol layer interacts with network and abstracts ondc network from you application
- this is pure Rest api based server, which is being used to send request to network(Gateway pr peers)
- This also receives all requests from network
- utilizes mongodb to store the request responses as a backup to be able to relay again in case downstream(client api server) is unresponsive

# ONDC BAP Protocol Layer(Python)

BAP Protocol Layer written in python using flask framework

# Features

1. uses json-schema for schema-validation for request and responses of Network calls
2. pagination on search callbacks

# Local Setup

1. Install [Python3](https://www.python.org/downloads/) and [pip3](https://www.activestate.com/resources/quick-reads/how-to-install-and-use-pip3/)

2. Install the current version of Mongo DB from [here](https://docs.mongodb.com/manual/installation/)

3. Create virtual environment and activate [here](https://docs.python.org/3/library/venv.html)

```bash
python3 -m venv .venv
```

```bash
source ./.venv/bin/activate
```

4. To install the dependencies, run the command: 
```bash
pip3 install -r ./webserver/requirements.3.10.txt  # for python 3.10
# (or)
pip3 install -r ./webserver/requirements.txt  # for python 3.7
```

5. Run the below command to set the env, other values for ENV are `test`, `pre_prod` and `prod`
```bash
export ENV=dev
```

6. To make webserver as root directory, run the below command

```bash
cd webserver
```

7. Run the below command to start the server:

```bash
python -m manage
```


# For MartPe

### Initial Steps for local setup

1. clone this repo locally.

2. Follow the [video](https://www.youtube.com/watch?v=deEYHVpE1c8&ab_channel=FaradayAcademy) for the local git configurations setip as this is a forked repo.

3. MartPe uses <a href="https://github.com/martpe-org/py-protocol-layer/tree/martpe-dev">martpe-dev</a> as the base branch, which is a branch cut from `feature/handle-version-1.2` branch of upstream. Any new upstream features can be fetched from the below command.

```bash
git pull upstream feature/handle-version-1.2
```

### Starting the server
