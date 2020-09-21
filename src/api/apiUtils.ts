export async function handleResponse(response: Response) {
    if (response.ok) return response.json();
    if (response.status === 400) {
        const error = await response.text();
        throw new Error(error)
    }

    throw new Error("network response was not ok");
}

export function handleerror(error: Error) {
    console.error("API call failed: ", error)
    throw error;
}