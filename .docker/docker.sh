#!/bin/bash

viperet - name & group current user (owner for logs directory and entity.json file)
export USER_ID=$(id -u viperet)
export GROUP_ID=$(id -g viperet)

docker compose up -d