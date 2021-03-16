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
sudo yum install -y java-1.8.0-openjdk-devel.x86_64
sudo alternatives --config java
cd /usr/local/lib/
sudo wget http://ftp.meisei-u.ac.jp/mirror/apache/dist/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz
sudo tar -xzvf apache-maven-3.6.3-bin.tar.gz
sudo mv apache-maven-3.6.3 /opt/
cd /opt/
sudo ln -s /opt/apache-maven-3.6.3 apache-maven
cd
echo 'MVN_HOME=/opt/apache-maven' >>~/.bash_profile
echo 'PATH=$MVN_HOME/bin:$PATH:$HOME/.local/bin:$HOME/bin' >>~/.bash_profile
source .bash_profile
sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
. ~/.nvm/nvm.sh
sudo nvm install node
sudo yum install -y postgresql postgresql-server
sudo service postgresql initdb
sudo service postgresql start
sudo -u postgres createuser -s ec2-user
createdb acebook_springboot_development
sudo mvn spring-boot:run
