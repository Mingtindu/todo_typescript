const GRAPHQL_ENDPOINT = "https://countries.trevorblades.com/";

export async function graphqlFetch<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error(
      json.errors.map((err: { message: string }) => err.message).join("\n")
    );
  }

  return json.data as T;
}
