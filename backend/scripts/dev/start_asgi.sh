#!/usr/bin/env bash


# until cd /app/backend/server
# do
#     echo "Waiting for server volume..."
# done

# until ./manage.py migrate
# do
#     echo "Waiting for postgres ready..."
#     sleep 2
# done

# cd backend

if $CI_PIPELINE_TRIGGERED ; then cd backend ; fi

daphne backend.asgi:application --bind 0.0.0.0 --port 9000