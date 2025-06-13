import { Alert, AlertDescription, AlertTitle } from "@/shared/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface ErrorMessageProps {
    errorMessage: string;
}

export function ErrorMessage({ errorMessage }: ErrorMessageProps) {
    return (
        <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
    );
}
