ARG UBUNTU_VERSION=latest
ARG NODE_VERSION=latest

FROM ubuntu:${UBUNTU_VERSION}

LABEL maintainer="josephcuffney@gmail.com"

# update packages
RUN apt-get update -yq 

# install linux packages
RUN apt-get install -yq \
  git \
  ssh \
  tar \
  gzip \
  ca-certificates \
  apt-transport-https \
  sudo \
  unzip \
  wget \
  curl \
  gnupg2

# yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update -yq && \
  apt-get install -yq yarn

# install node 8 + npm
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - && \
  apt-get install -yq nodejs build-essential && \
  yarn global add npm

# install n (node version manager)
RUN npm i -g n && \
  n ${NODE_VERSION} -q && \
  npm i -g npm

# install aws cli
# TODO: remove once terriform does deployes
RUN curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip" && \
  unzip -q awscli-bundle.zip && \
  sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws && \
  rm -R awscli-bundle.zip ./awscli-bundle;

# circleci user
RUN groupadd --gid 3434 circleci \
  && useradd --uid 3434 --gid circleci --shell /bin/bash --create-home circleci \
  && echo 'circleci ALL=NOPASSWD: ALL' >> /etc/sudoers.d/50-circleci \
  && echo 'Defaults    env_keep += "DEBIAN_FRONTEND"' >> /etc/sudoers.d/env_keep

# TODO: Add Terraform to Image Terraform
# TODO: Add Selenium Software to Image

USER circleci

CMD ["/bin/sh"]