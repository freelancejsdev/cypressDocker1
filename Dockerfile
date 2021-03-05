FROM cypress/included:6.0.0

COPY . .

RUN npm install
RUN npm run triggerAllTests-customCommands