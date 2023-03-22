import { gql } from "@apollo/client";

//////////////// queries  ///////////////////
export const AllDataQuery = gql`
  query {
    resources {
      id
      name
      parentIndex
    }
    events {
      id
      name
      startDate
      endDate
      resourceId
      resizable
      draggable
      cls
      duration
      durationUnit
      parentIndex
      orderedParentIndex
      exceptionDates
      readOnly
      recurrenceCombo
    }
  }
`;

//////////////// resource mutations  ///////////////////
export const CreateResourceMutation = gql`
  mutation createResource($id: String!, $name: String!, $parentIndex: Int!) {
    createResource(id: $id, name: $name, parentIndex: $parentIndex) {
      id
      name
      parentIndex
    }
  }
`;

export const DeleteResourceMutation = gql`
  mutation deleteResource($id: String!) {
    deleteResource(id: $id) {
      id
    }
  }
`;

export const UpdateResourceMutation = gql`
  mutation updateResource($id: String!, $name: String, $parentIndex: Int) {
    updateResource(id: $id, name: $name, parentIndex: $parentIndex) {
      id
      name
      parentIndex
    }
  }
`;

//////////////// event mutations  ///////////////////

export const CreateEventMutation = gql`
  mutation createEvent(
    $id: String!
    $name: String!
    $startDate: String!
    $endDate: String!
    $resourceId: String!
    $resizable: Boolean!
    $draggable: Boolean!
    $cls: String!
    $duration: Float!
    $durationUnit: String!
    $parentIndex: Int!
    $orderedParentIndex: Int
    $exceptionDates: String
    $readOnly: Boolean
    $allDay: Boolean!
    $recurrenceCombo: String
  ) {
    createEvent(
      id: $id
      name: $name
      startDate: $startDate
      endDate: $endDate
      resourceId: $resourceId
      resizable: $resizable
      draggable: $draggable
      cls: $cls
      duration: $duration
      durationUnit: $durationUnit
      parentIndex: $parentIndex
      orderedParentIndex: $orderedParentIndex
      exceptionDates: $exceptionDates
      readOnly: $readOnly
      allDay: $allDay
      recurrenceCombo: $recurrenceCombo
    ) {
      id
      name
      startDate
      endDate
      resourceId
      resizable
      draggable
      cls
      duration
      durationUnit
      parentIndex
      orderedParentIndex
      exceptionDates
      readOnly
      allDay
      recurrenceCombo
    }
  }
`;

export const DeleteEventMutation = gql`
  mutation deleteEvent($id: String!) {
    deleteEvent(id: $id) {
      id
    }
  }
`;

export const UpdateEventMutation = gql`
  mutation updateEvent(
    $id: String!
    $name: String
    $startDate: String
    $endDate: String
    $resourceId: String
    $resizable: Boolean
    $draggable: Boolean
    $cls: String
    $duration: Float
    $durationUnit: String
    $parentIndex: Int
    $orderedParentIndex: Int
    $exceptionDates: String
    $readOnly: Boolean
    $allDay: Boolean
    $recurrenceCombo: String
  ) {
    updateEvent(
      id: $id
      name: $name
      startDate: $startDate
      endDate: $endDate
      resourceId: $resourceId
      resizable: $resizable
      draggable: $draggable
      cls: $cls
      duration: $duration
      durationUnit: $durationUnit
      parentIndex: $parentIndex
      orderedParentIndex: $orderedParentIndex
      exceptionDates: $exceptionDates
      readOnly: $readOnly
      allDay: $allDay
      recurrenceCombo: $recurrenceCombo
    ) {
      id
      name
      startDate
      endDate
      resourceId
      resizable
      draggable
      cls
      duration
      durationUnit
      parentIndex
      orderedParentIndex
      exceptionDates
      readOnly
      allDay
      recurrenceCombo
    }
  }
`;
