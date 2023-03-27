import { useMutation, useQuery } from "@apollo/client";
import {
  CreateResourceMutation,
  DeleteResourceMutation,
  UpdateResourceMutation,
  CreateEventMutation,
  DeleteEventMutation,
  UpdateEventMutation,
  AllDataQuery,
} from "@/helpers/graphqlOperations";

export function useQueryAndMutations() {
  const refetchQueries = [{ query: AllDataQuery }];

  const {
    data,
    loading: loadingQuery,
    error: errorQuery,
  } = useQuery(AllDataQuery);

  const [createResource, createResourceMeta] = useMutation(
    CreateResourceMutation,
    { refetchQueries }
  );
  const [deleteResource, deleteResourceMeta] = useMutation(
    DeleteResourceMutation,
    { refetchQueries }
  );
  const [updateResource, updateResourceMeta] = useMutation(
    UpdateResourceMutation,
    { refetchQueries }
  );

  const [createEvent, createEventMeta] = useMutation(CreateEventMutation, {
    refetchQueries,
  });
  const [deleteEvent, deleteEventMeta] = useMutation(DeleteEventMutation);
  const [updateEvent, updateEventMeta] = useMutation(UpdateEventMutation, {
    refetchQueries,
  });

  return {
    data,
    createResource,
    deleteResource,
    updateResource,
    createEvent,
    deleteEvent,
    updateEvent,
    loading: {
      loadingQuery: loadingQuery,
      createResource: createResourceMeta.loading,
      deleteResource: deleteResourceMeta.loading,
      updateResource: updateResourceMeta.loading,
      createEvent: createEventMeta.loading,
      deleteEvent: deleteEventMeta.loading,
      updateEvent: updateEventMeta.loading,
    },
    error: {
      errorQuery: errorQuery,
      createResource: createResourceMeta.error,
      deleteResource: deleteResourceMeta.error,
      updateResource: updateResourceMeta.error,
      createEvent: createEventMeta.error,
      deleteEvent: deleteEventMeta.error,
      updateEvent: updateEventMeta.error,
    },
  };
}
