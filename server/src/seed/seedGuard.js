const REQUIRED_CONFIRMATION = "replace-all-content";

export const assertSeedAllowed = (environment = process.env) => {
  if (environment.SEED_CONFIRMATION !== REQUIRED_CONFIRMATION) {
    throw new Error(
      `Seeding replaces existing content. Set SEED_CONFIRMATION=${REQUIRED_CONFIRMATION} to continue.`,
    );
  }

  if (environment.NODE_ENV === "production" && environment.ALLOW_PRODUCTION_SEED !== "true") {
    throw new Error(
      "Production seeding is blocked. Restore from a backup or explicitly set ALLOW_PRODUCTION_SEED=true.",
    );
  }
};
