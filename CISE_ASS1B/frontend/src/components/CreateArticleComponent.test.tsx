// CreateArticleComponent.test.tsx

import React from "react";
import { render, screen, fireEvent, waitFor,act } from "@testing-library/react";
import CreateArticleComponent from "./User/CreateArticle";

// Mocking the useRouter hook from next/navigation
const mockPush = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

// Complete mock for fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    redirected: false,
    type: "default",
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Articles`,
    json: () => Promise.resolve({}),
  } as Response)
);

describe("CreateArticleComponent", () => {
  it("renders the form elements correctly", () => {
    render(<CreateArticleComponent />);

    expect(screen.getByPlaceholderText("Title of the Article")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Authors")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("DOI")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Published Date")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Volume")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Number")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Pages")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Content of the Article")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Short Descriptor")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("handles input changes", () => {
    render(<CreateArticleComponent />);

    fireEvent.change(screen.getByPlaceholderText("Title of the Article"), {
      target: { value: "Sample Article" },
    });
    fireEvent.change(screen.getByPlaceholderText("Authors"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("DOI"), {
      target: { value: "10.1234/example.doi" },
    });
    fireEvent.change(screen.getByPlaceholderText("Volume"), {
      target: { value: "1" },
    });
    fireEvent.change(screen.getByPlaceholderText("Number"), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByPlaceholderText("Pages"), {
      target: { value: "10" },
    });
    fireEvent.change(screen.getByPlaceholderText("Content of the Article"), {
      target: { value: "This is the content of the article." },
    });
    fireEvent.change(screen.getByPlaceholderText("Short Descriptor"), {
      target: { value: "Short descriptor text." },
    });

    // Check if input values are updated correctly
    expect((screen.getByPlaceholderText("Title of the Article") as HTMLInputElement).value).toBe("Sample Article");
    expect((screen.getByPlaceholderText("Authors") as HTMLInputElement).value).toBe("John Doe");
    expect((screen.getByPlaceholderText("DOI") as HTMLInputElement).value).toBe("10.1234/example.doi");
    expect((screen.getByPlaceholderText("Volume") as HTMLInputElement).value).toBe("1");
    expect((screen.getByPlaceholderText("Number") as HTMLInputElement).value).toBe("2");
    expect((screen.getByPlaceholderText("Pages") as HTMLInputElement).value).toBe("10");
    expect((screen.getByPlaceholderText("Content of the Article") as HTMLInputElement).value).toBe("This is the content of the article.");
    expect((screen.getByPlaceholderText("Short Descriptor") as HTMLInputElement).value).toBe("Short descriptor text.");
  });

  it("submits the form correctly", async () => {
    const { push } = require("next/navigation").useRouter();

    render(<CreateArticleComponent />);

    fireEvent.change(screen.getByPlaceholderText("Title of the Article"), {
      target: { value: "Sample Article" },
    });
    fireEvent.change(screen.getByPlaceholderText("Authors"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("DOI"), {
      target: { value: "10.1234/example.doi" },
    });
    fireEvent.change(screen.getByPlaceholderText("Published Date"), {
      target: { value: "2024-01-01" },
    });
    fireEvent.change(screen.getByPlaceholderText("Volume"), {
      target: { value: "1" },
    });
    fireEvent.change(screen.getByPlaceholderText("Number"), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByPlaceholderText("Pages"), {
      target: { value: "10" },
    });
    fireEvent.change(screen.getByPlaceholderText("Content of the Article"), {
      target: { value: "This is the content of the article." },
    });
    fireEvent.change(screen.getByPlaceholderText("Short Descriptor"), {
      target: { value: "Short descriptor text." },
    });

    // Wrap the submit event in act
  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
  });

    // Validate the API call
    expect(fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/Articles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Sample Article",
        authors: "John Doe",
        DOI: "10.1234/example.doi",
        publication_year: "2024-01-01", // Use a string for consistency
        volume: "1",
        number: "2",
        pages: "10",
        content: "This is the content of the article.",
        descriptor: "Short descriptor text.",
        updated_date: undefined, // Modify this as needed
        status: "pending", // Default status value
      }),
    });

    // Validate the redirect
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/Home");
    });
  });
});
