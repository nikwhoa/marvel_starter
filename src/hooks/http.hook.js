import { useState, useCallback } from 'react';

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [proccess, setProccess] = useState('waiting');

    const request = useCallback(
        async (
            url,
            method = 'GET',
            body = null,
            headers = { 'Content-Type': 'application/json' }
        ) => {
            setLoading(true);
            setProccess('loading');
            try {
                const response = await fetch(url, { method, body, headers });

                if (!response.ok) {
                    throw new Error(
                        `Could not fetch ${url}, status: ${response.status}`
                    );
                }

                const data = await response.json();

                setLoading(false);

                return data;
            } catch (e) {
                setLoading(false);
                setError(e.message);
                setProccess('error');
                throw e;
            }
        },
        []
    );

    const clearError = useCallback(() => {
        setError(null);
        setProccess('waiting');
    }, []);

    return { loading, request, error, clearError, proccess, setProccess };
};
