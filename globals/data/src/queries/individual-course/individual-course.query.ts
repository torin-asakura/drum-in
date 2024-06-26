import { gql } from '../../__generated__'

const GET_INDIVIDUAL_COURSE = gql(`
query IndividualCourse($id: ID!) {
individualCourse(id: $id) {
content
title
individualCourseData {
aboutCourse
process {
step {
description
title
}
}

background {
noise{node{sourceUrl}}
courseProgram{node{sourceUrl}}
desktop {
footer {
node {
sourceUrl
}
}
hero {
node {
sourceUrl
}
}
teacher {
node {
sourceUrl
}
}
}
mobile {
footer {
node {
sourceUrl
}
}
hero {
node {
sourceUrl
}
}
teacher {
node {
sourceUrl
}
}
}
}

price {
bonuses
cta
courseLengthInMonths
discount
fullPrice
liveTrainingsNumber
monthlyPrice
oldPrice
title
videoTrainingsNumber
}
hero {
benefits {
content
}
runningLine
courseConditions {
description
number
}
cta
}
}
}
}
`)

export { GET_INDIVIDUAL_COURSE }
