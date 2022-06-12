FROM quay.io/keycloak/keycloak:14.0.0

COPY themes/base/. /opt/jboss/keycloak/themes/custom
COPY keywind/theme/keywind/. /opt/jboss/keycloak/themes/keywind