docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test6/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t test6/app ../..
