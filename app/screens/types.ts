// types.ts or where you define your navigation types
export type RootStackParamList = {
    Home: undefined; // No parameters for the Home screen
    Signup: undefined;
    Profile: { userId: string }; // Example with parameter
};
