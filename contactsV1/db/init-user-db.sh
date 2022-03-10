set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<- EOSQL
    CREATE USER root WITH PASSWORD 'root';
    CREATE DATABASE contacts;
    GRANT ALL PRIVILEGES ON DATABASE contacts TO docker;
EOSQL