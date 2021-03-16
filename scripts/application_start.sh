# cd ~
# sudo touch /etc/yum.repos.d/mongodb-org-4.4.repo
# sudo tee -a /etc/yum.repos.d/mongodb-org-4.4.repo > /dev/null <<EOT
# [mongodb-org-4.4]
# name=MongoDB Repository
# baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/4.4/x86_64/
# gpgcheck=1
# enabled=1
# gpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc
# EOT
# sudo yum install -y mongodb-org
# sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
# . ~/.nvm/nvm.sh
# echo 'needlessly installing node'
# nvm install node
# echo 'starting mongo'
# sudo systemctl start mongod
# echo 'starting app'
# node ./bin/www &> /dev/null &

cd ~
# sudo yum install java-1.8.0-openjdk
# sudo yum install -y maven
sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
sudo yum install -y postgresql postgresql-server
sudo service postgresql initdb
sudo service postgresql start
sudo -u postgres createuser -s ec2-user
createdb acebook_springboot_development
mvn spring-boot:run
