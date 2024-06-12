<div className="flex items-center justify-end gap-x-2">
    <Button>
        type="button"
        onClick={validateFlow}
        disabled={isValidating}
        className={cn(
            "h-full flex items-center justify-center outline-none gap-x-2 border border-dark-300 rounded-lg bg-dark-300/50 px-3 text-sm transition",
            isValidating && "cursor-not-allowed op-50 pointer-events-none",
        )}
        {isValidating ? (
            <Spinner size={4.5} />
        ) : (
            <CheckCircleIcon size={4.5} />
        )}
        <span className="pr-0.5">
            {isValidating ? "Validating Flow" : "Validate Flow"}
        </span>
    </Button>

    <div className="h-4 w-px bg-dark-300" />

    <SocialButtonGroup>
        <SocialButtonLink href="https://www.linkedin.com/in/abhisheksharma/">
            <LinkedInIcon size={4.5} />
        </SocialButtonLink>
        {/* Add more social buttons here */}
    </SocialButtonGroup>
</div>