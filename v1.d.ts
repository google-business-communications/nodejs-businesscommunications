/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace businesscommunications_v1 {
    export interface Options extends GlobalOptions {
        version: 'v1';
    }
    interface StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient | BaseExternalAccountClient | GoogleAuth;
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
    /**
     * Business Communications
     *
     *
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const businesscommunications = google.businesscommunications('v1');
     * ```
     */
    export class Businesscommunications {
        context: APIRequestContext;
        brands: Resource$Brands;
        partners: Resource$Partners;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * A conversational entity that represents a brand.
     */
    export interface Schema$Agent {
        /**
         * Detailed agent information for Business Messages.
         */
        businessMessagesAgent?: Schema$BusinessMessagesAgent;
        /**
         * Required. The name that the agent displays to users. Maximum 100 characters. Not modifiable after agent verification.
         */
        displayName?: string | null;
        /**
         * The unique identifier of the agent. Read-only. Defined by the platform.
         */
        name?: string | null;
        /**
         * Detailed agent information for Verified Calls.
         */
        verifiedCallsAgent?: Schema$VerifiedCallsAgent;
        /**
         * Detailed agent information for Verified SMS.
         */
        verifiedSmsAgent?: Schema$VerifiedSmsAgent;
    }
    /**
     * Details about an agent launch.
     */
    export interface Schema$AgentLaunch {
        /**
         * Launch details for a Business Messages agent.
         */
        businessMessages?: Schema$BusinessMessagesLaunch;
        /**
         * Required. The identifier for launch.
         */
        name?: string | null;
        /**
         * Launch details for a Verified Calls agent.
         */
        verifiedCalls?: Schema$VerifiedCallsLaunch;
    }
    /**
     * Details about the verification information for an agent.
     */
    export interface Schema$AgentVerification {
        /**
         * Required. The contact details.
         */
        agentVerificationContact?: Schema$AgentVerificationContact;
        /**
         * Required. The identifier for verification.
         */
        name?: string | null;
        /**
         * The verification state.
         */
        verificationState?: string | null;
    }
    /**
     * Verification contact details for an agent.
     */
    export interface Schema$AgentVerificationContact {
        /**
         * Required. The email address of the brand representative.
         */
        brandContactEmailAddress?: string | null;
        /**
         * Required. Name of a brand representative who can verify the accuracy of the launch details and that the partner represents the brand.
         */
        brandContactName?: string | null;
        /**
         * Required. The public website of the brand to verify the domain.
         */
        brandWebsiteUrl?: string | null;
        /**
         * Required. The email address of the partner.
         */
        partnerEmailAddress?: string | null;
        /**
         * Required. The name of the partner requesting the verification.
         */
        partnerName?: string | null;
    }
    /**
     * Approval details composed from the state and optional additional information.
     */
    export interface Schema$ApprovalDetails {
        /**
         * Output only. Additional information about the decision, if available.
         */
        approvalInfo?: string | null;
        /**
         * Output only. The current approval state.
         */
        approvalState?: string | null;
    }
    /**
     * Configuration details for supporting OAuth on Business Messages.
     */
    export interface Schema$AuthorizationConfig {
        /**
         * The endpoint URL where the user logs in.
         */
        endpointUrl?: string | null;
    }
    /**
     * Details for bot representative.
     */
    export interface Schema$BotRepresentative {
        /**
         * Required. Bot messaging availability.
         */
        botMessagingAvailability?: Schema$MessagingAvailability;
    }
    /**
     * A brand (business, organization, or group) that is represented by an agent.
     */
    export interface Schema$Brand {
        /**
         * Required. The display name of the brand. Maximum 40 characters.
         */
        displayName?: string | null;
        /**
         * Output only. The unique identifier of the brand. Defined by the platform.
         */
        name?: string | null;
    }
    /**
     * Agent information specific to Business Messages.
     */
    export interface Schema$BusinessMessagesAgent {
        /**
         * Optional. Additional agent interaction information. Enables the agent to support multiple interaction types.
         */
        additionalAgentInteractions?: Schema$SupportedAgentInteraction[];
        /**
         * Output only. The URL for testing the agent's conversational experience. Defined by the platform.
         */
        agentTestUrl?: string | null;
        /**
         * Optional. Authorization configuration for OAuth support.
         */
        authorizationConfig?: Schema$AuthorizationConfig;
        /**
         * Required. Conversational settings for an agent, mapped to a locale. Locale is represented by a well-formed [IETF BCP 47](https://tools.ietf.org/html/bcp47) language tag.
         */
        conversationalSettings?: {
            [key: string]: Schema$ConversationalSetting;
        } | null;
        /**
         * Optional. A partner-specified identifier for the agent. The identifier is passed alongside all messages sent to the agent.
         */
        customAgentId?: string | null;
        /**
         * Required. The default locale for the agent. Must match a locale defined in `conversationalSettings`.
         */
        defaultLocale?: string | null;
        /**
         * Optional. List of entry point configurations. Not modifiable after agent verification.
         */
        entryPointConfigs?: Schema$BusinessMessagesEntryPointConfig[];
        /**
         * Required. Publicly available URL of the logo for the agent. Maximum 50 KB. Not modifiable after agent verification.
         */
        logoUrl?: string | null;
        /**
         * Optional. Configuration for non-local entry points.
         */
        nonLocalConfig?: Schema$NonLocalConfig;
        /**
         * Optional. The phone number for the agent to display. If not specified, the agent displays the phone number for the brand found in the [Google Knowledge Graph](https://developers.google.com/knowledge-graph), if any.
         */
        phone?: Schema$Phone;
        /**
         * Required. Primary agent interaction information. Used when the user initiates a conversation.
         */
        primaryAgentInteraction?: Schema$SupportedAgentInteraction;
        /**
         * Optional. Configuration to enable custom surveys.
         */
        surveyConfig?: Schema$SurveyConfig;
        /**
         * Output only. URLs for testing the agent's conversational experience. Defined by the platform.
         */
        testUrls?: Schema$TestUrl[];
    }
    /**
     * Business Messages capabilities
     */
    export interface Schema$BusinessMessagesCapability {
        /**
         * Required. The webhook URL where the messages are delivered.
         */
        webhookUrl?: string | null;
    }
    /**
     * The entry point configuration for an agent.
     */
    export interface Schema$BusinessMessagesEntryPointConfig {
        /**
         * Required. The Google surfaces the agent is enabled to appear on.
         */
        allowedEntryPoint?: string | null;
    }
    /**
     * Details about Business Messages agent launch for each entry point.
     */
    export interface Schema$BusinessMessagesEntryPointLaunch {
        /**
         * Entry point for which launch information is provided.
         */
        entryPoint?: string | null;
        /**
         * The launch state for entry point.
         */
        launchState?: string | null;
        /**
         * List of [CLDR region codes](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) for countries where the agent should launch `NON_LOCAL` entry points. Required for `NON_LOCAL` entry points. This must be a subset of the region codes specified in the agent's `nonLocalConfig`.
         */
        regionCodes?: string[] | null;
    }
    /**
     * Details about a Business Messages agent launch.
     */
    export interface Schema$BusinessMessagesLaunch {
        /**
         * Required. Launch details for each supported entry point. Key represented by BusinessMessagesEntryPointConfig.EntryPoint
         */
        launchDetails?: {
            [key: string]: Schema$BusinessMessagesEntryPointLaunch;
        } | null;
    }
    /**
     * Call reason with approval information.
     */
    export interface Schema$CallReason {
        /**
         * Output only. Approval details; each call reason must be approved before use.
         */
        approvalDetails?: Schema$ApprovalDetails;
        /**
         * Immutable. The actual text of the call reason.
         */
        text?: string | null;
    }
    /**
     * Contact details displayed in addition to the messaging button.
     */
    export interface Schema$ContactOption {
        /**
         * Required. The list of contact options available for the specified URL.
         */
        options?: string[] | null;
        /**
         * Required. The URL that contact options are available for.
         */
        url?: string | null;
    }
    /**
     * Conversational setting for an agent or location. Each locale has its own conversational settings. Locale is represented by a well-formed [IETF BCP 47](https://tools.ietf.org/html/bcp47) language tag.
     */
    export interface Schema$ConversationalSetting {
        /**
         * Optional. Details about the agent's conversation starters. Maximum 5.
         */
        conversationStarters?: Schema$ConversationStarters[];
        /**
         * Optional. Details about the offline message for an agent.
         */
        offlineMessage?: Schema$OfflineMessage;
        /**
         * Required. Details about the agent's privacy policy.
         */
        privacyPolicy?: Schema$PrivacyPolicy;
        /**
         * Required. Details about the welcome message for an agent.
         */
        welcomeMessage?: Schema$WelcomeMessage;
    }
    /**
     * Suggested replies shown to users when they enter a conversation with the agent for the first time.
     */
    export interface Schema$ConversationStarters {
        /**
         * Optional. Suggestion at the beginning of a conversation.
         */
        suggestion?: Schema$Suggestion;
    }
    /**
     * Custom survey configuration for an agent.
     */
    export interface Schema$CustomSurveyConfig {
        /**
         * List of custom questions.
         */
        customQuestions?: Schema$SurveyQuestion[];
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \} The JSON representation for `Empty` is empty JSON object `{\}`.
     */
    export interface Schema$Empty {
    }
    /**
     * A range of hours that messaging is available.
     */
    export interface Schema$Hours {
        /**
         * Required. End day. Includes the specified day.
         */
        endDay?: string | null;
        /**
         * Required. End time for each day within the day-of-week range.
         */
        endTime?: Schema$TimeOfDay;
        /**
         * Required. Start day.
         */
        startDay?: string | null;
        /**
         * Required. Start time for each day within the day-of-week range.
         */
        startTime?: Schema$TimeOfDay;
        /**
         * Required. The [IANA time zone](https://www.iana.org/time-zones) for the hours. For example, "America/Los_Angeles".
         */
        timeZone?: string | null;
    }
    /**
     * Details for human representative.
     */
    export interface Schema$HumanRepresentative {
        /**
         * Required. Human messaging availability.
         */
        humanMessagingAvailability?: Schema$MessagingAvailability;
    }
    /**
     * A list of agents.
     */
    export interface Schema$ListAgentsResponse {
        /**
         * List of agent information.
         */
        agents?: Schema$Agent[];
        /**
         * The pagination token to retrieve the next page of results. If the value is "", it means no further results for the request.
         */
        nextPageToken?: string | null;
    }
    /**
     * A list of brands.
     */
    export interface Schema$ListBrandsResponse {
        /**
         * List of brand information.
         */
        brands?: Schema$Brand[];
        /**
         * The pagination token to retrieve the next page of results. If the value is "", it means no further results for the request.
         */
        nextPageToken?: string | null;
    }
    /**
     * A list of locations.
     */
    export interface Schema$ListLocationsResponse {
        /**
         * List of locations.
         */
        locations?: Schema$Location[];
        /**
         * The pagination token to retrieve the next page of results. If the value is "", it means no further results for the request.
         */
        nextPageToken?: string | null;
    }
    /**
     * Information about a physical location of a brand.
     */
    export interface Schema$Location {
        /**
         * Required. The name of the agent associated with the location. If the brand identifier is "1234" and the agent identifier is "5678", this field resolves to "brands/1234/agents/5678".
         */
        agent?: string | null;
        /**
         * Optional. Conversational settings for an location, mapped to a locale. Locale is represented by a well-formed [IETF BCP 47](https://tools.ietf.org/html/bcp47) language tag.
         */
        conversationalSettings?: {
            [key: string]: Schema$ConversationalSetting;
        } | null;
        /**
         * Required. The default locale for the location.
         */
        defaultLocale?: string | null;
        /**
         * Output only. Identifies the Google My Business Listing this Location is associated with.
         */
        listingId?: string | null;
        /**
         * Required. List of entry point configurations for locations. Not modifiable after being available to users through an agent.
         */
        locationEntryPointConfigs?: Schema$LocationEntryPointConfig[];
        /**
         * Output only. The URL for testing the location's conversational experience. Defined by the platform.
         */
        locationTestUrl?: string | null;
        /**
         * The unique identifier of the location. Read-only. Defined by the platform.
         */
        name?: string | null;
        /**
         * Required. The [Place ID](https://developers.google.com/places/place-id), or unique identifier used in Google Maps, for the location. Not modifiable after being available to users through an agent.
         */
        placeId?: string | null;
        /**
         * Output only. URLs for testing the location's conversational experience. Defined by the platform.
         */
        testUrls?: Schema$TestUrl[];
    }
    /**
     * The entry point configuration for a location.
     */
    export interface Schema$LocationEntryPointConfig {
        /**
         * Required. The Google surfaces the location is enabled to appear on.
         */
        allowedEntryPoint?: string | null;
    }
    /**
     * Details about a location launch.
     */
    export interface Schema$LocationLaunch {
        /**
         * The launch state.
         */
        launchState?: string | null;
        /**
         * Required. The identifier for launch.
         */
        name?: string | null;
    }
    /**
     * Details about the verification information for a location.
     */
    export interface Schema$LocationVerification {
        /**
         * Required. The identifier for verification.
         */
        name?: string | null;
        /**
         * The verification state.
         */
        verificationState?: string | null;
    }
    /**
     * The hours of each day of the week that messaging is available. You can group hours for multiple days together. For example, * 08:00–16:00 hrs PDT Monday–Wednesday * 10:00–14:00 hrs PDT Thursday–Friday * 15:00–18:00 hrs PDT Thursday–Friday * 10:00–14:00 hrs PDT Saturday–Saturday If there are gaps in availability, such as no specified availability on Sunday, messaging is unavailable during those gaps.
     */
    export interface Schema$MessagingAvailability {
        /**
         * Required. Hours of messaging availability.
         */
        hours?: Schema$Hours[];
    }
    /**
     * Configuration to enable non-local entry points.
     */
    export interface Schema$NonLocalConfig {
        /**
         * Required. List of phone numbers for call deflection.
         */
        callDeflectionPhoneNumbers?: Schema$Phone[];
        /**
         * Required. Contact information for the agent that displays with the messaging button.
         */
        contactOption?: Schema$ContactOption;
        /**
         * Required. Domains to enable the Business Messages widget and the sitelinks entry point.
         */
        enabledDomains?: string[] | null;
        /**
         * Required. Agent's phone number. Overrides the `phone` field for conversations started from non-local entry points. This phone number will be used for all configured regions.
         */
        phoneNumber?: Schema$Phone;
        /**
         * Required. List of [CLDR region codes](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) for countries where the agent is allowed to launch `NON_LOCAL` entry points. Required for `NON_LOCAL` entry points.
         */
        regionCodes?: string[] | null;
    }
    /**
     * The greeting shown to users when they enter a conversation with the agent outside the chat hours.
     */
    export interface Schema$OfflineMessage {
        /**
         * The text of the offline message. Maximum length 1000 characters.
         */
        text?: string | null;
    }
    /**
     * Opens the specified URL.
     */
    export interface Schema$OpenUrlAction {
        /**
         * URL
         */
        url?: string | null;
    }
    /**
     * Partner that is onboarded with a supported product.
     */
    export interface Schema$Partner {
        /**
         * Optional. The company name of the partner.
         */
        company?: string | null;
        /**
         * Optional. The list of contact emails.
         */
        contactEmails?: string[] | null;
        /**
         * Required. The display name of the partner.
         */
        displayName?: string | null;
        /**
         * Output only. The unique identifier of the partner. Defined by the platform.
         */
        name?: string | null;
        /**
         * The product capabilities of the partner.
         */
        productCapabilities?: Schema$ProductCapability[];
    }
    /**
     * Phone number.
     */
    export interface Schema$Phone {
        /**
         * Required. Phone number in E.164 format. For example, "+12223334444".
         */
        number?: string | null;
    }
    /**
     * Privacy policy details for an agent.
     */
    export interface Schema$PrivacyPolicy {
        /**
         * Required. The URL for the privacy policy.
         */
        url?: string | null;
    }
    /**
     * The product capabilities that the partner supports.
     */
    export interface Schema$ProductCapability {
        /**
         * Business Messages capability.
         */
        businessMessagesCapability?: Schema$BusinessMessagesCapability;
        /**
         * The product supported by the partner.
         */
        product?: string | null;
        /**
         * Verified SMS capability.
         */
        verifiedSmsCapability?: Schema$VerifiedSmsCapability;
    }
    /**
     * Request to launch an agent.
     */
    export interface Schema$RequestAgentLaunchRequest {
        /**
         * Required. The agent launch to create. Name and Launch status are ignored.
         */
        agentLaunch?: Schema$AgentLaunch;
    }
    /**
     * Request to begin business information verification for an agent.
     */
    export interface Schema$RequestAgentVerificationRequest {
        /**
         * Required. Verification contact details for the agent.
         */
        agentVerificationContact?: Schema$AgentVerificationContact;
    }
    /**
     * Request to launch a location.
     */
    export interface Schema$RequestLocationLaunchRequest {
    }
    /**
     * Request to begin business information verification for a location.
     */
    export interface Schema$RequestLocationVerificationRequest {
    }
    /**
     * Sender IDs and the countries they operate in.
     */
    export interface Schema$Sender {
        /**
         * A country the sender ID operates in as an [ISO 3166 Alpha-2 country code](https://www.iso.org/obp/ui/#search/code/). For example, "US" for the United States of America.
         */
        countryCode?: string | null;
        /**
         * A sender ID—a long code (E.164 format), short code, national code, or alphanumeric code—associated with the agent that can send SMS messages.
         */
        senderId?: string | null;
    }
    /**
     * When tapped, initiates the corresponding native action on the device.
     */
    export interface Schema$SuggestedAction {
        /**
         * Opens the specified URL.
         */
        openUrlAction?: Schema$OpenUrlAction;
        /**
         * The string that the agent receives when a user taps the suggested action.
         */
        postbackData?: string | null;
        /**
         * Text that is shown in the suggested action. Maximum 35 characters.
         */
        text?: string | null;
    }
    /**
     * When tapped, sends the text reply back to the agent.
     */
    export interface Schema$SuggestedReply {
        /**
         * Optional. The string the agent receives when the user taps the suggested reply.
         */
        postbackData?: string | null;
        /**
         * Required. Text that is shown in the suggested reply and sent back to the agent when the user taps it. Maximum 35 characters.
         */
        text?: string | null;
    }
    /**
     * A suggested reply.
     */
    export interface Schema$Suggestion {
        /**
         * A suggested action that initiates a native action on the device.
         */
        action?: Schema$SuggestedAction;
        /**
         * Users can tap a suggested reply to send the text back to the agent as a reply.
         */
        reply?: Schema$SuggestedReply;
    }
    /**
     * Interactions supported by an agent.
     */
    export interface Schema$SupportedAgentInteraction {
        /**
         * Bot representative details.
         */
        botRepresentative?: Schema$BotRepresentative;
        /**
         * Human representative details.
         */
        humanRepresentative?: Schema$HumanRepresentative;
        /**
         * Required. The type of interaction supported by the agent.
         */
        interactionType?: string | null;
    }
    /**
     * Configuration details for supporting customized survey questions.
     */
    export interface Schema$SurveyConfig {
        /**
         * Custom survey questions for an agent, mapped to a locale. Locale is represented by a well-formed [IETF BCP 47](https://tools.ietf.org/html/bcp47) language tag.
         */
        customSurveys?: {
            [key: string]: Schema$CustomSurveyConfig;
        } | null;
        /**
         * List of template question IDs for template questions included in a survey.
         */
        templateQuestionIds?: string[] | null;
    }
    /**
     * The detailed content of each survey question.
     */
    export interface Schema$SurveyQuestion {
        /**
         * Required. The unique identifier of the question.
         */
        name?: string | null;
        /**
         * Required. Question content. Limited to 200 characters for custom questions.
         */
        questionContent?: string | null;
        /**
         * Output only. Type of the question.
         */
        questionType?: string | null;
        /**
         * Required. List of responses displayed with the question. Maximum 12.
         */
        responseOptions?: Schema$SurveyResponse[];
    }
    /**
     * The content for a survey question response.
     */
    export interface Schema$SurveyResponse {
        /**
         * Required. Text that is shown in the survey and sent back to the agent when the user taps it. Maximum 35 characters.
         */
        content?: string | null;
        /**
         * The string the agent receives when the user taps the question response.
         */
        postbackData?: string | null;
    }
    /**
     * Test intent for supported conversational surfaces.
     */
    export interface Schema$TestUrl {
        /**
         * The surface for the conversation.
         */
        surface?: string | null;
        /**
         * The test url for launching conversation.
         */
        url?: string | null;
    }
    /**
     * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
     */
    export interface Schema$TimeOfDay {
        /**
         * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
         */
        hours?: number | null;
        /**
         * Minutes of hour of day. Must be from 0 to 59.
         */
        minutes?: number | null;
        /**
         * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
         */
        nanos?: number | null;
        /**
         * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
         */
        seconds?: number | null;
    }
    /**
     * Agent information specifically related to Verified Calls.
     */
    export interface Schema$VerifiedCallsAgent {
        /**
         * Required. Call reasons that this agent may use when placing a verified call. Only add / remove actions are allowed. Each action will be reviewed before the change takes place.
         */
        callReasons?: Schema$CallReason[];
        /**
         * Required. Publicly available URL of the agent logo to display with a verified call. Maximum 50 KB. Not modifiable after agent verification.
         */
        logoUrl?: string | null;
        /**
         * Required. Phone numbers that this agent may use when placing a verified call. Only add / remove actions are allowed. Each action will be reviewed before the change takes place.
         */
        phones?: Schema$VerifiedCallsPhone[];
    }
    /**
     * Details about Verified Calls agent launch.
     */
    export interface Schema$VerifiedCallsLaunch {
        /**
         * The launch state.
         */
        launchState?: string | null;
    }
    /**
     * Phone number with approval information.
     */
    export interface Schema$VerifiedCallsPhone {
        /**
         * Output only. Approval details, each phone number must be approved before use.
         */
        approvalDetails?: Schema$ApprovalDetails;
        /**
         * Immutable. Phone number in E.164 format i.e. +18888888888
         */
        number?: string | null;
    }
    /**
     * Agent information specific to Verified SMS.
     */
    export interface Schema$VerifiedSmsAgent {
        /**
         * Required. Description about the registered agent. The description is visible to end users. Maximum 100 characters.
         */
        description?: string | null;
        /**
         * Required. The agent logo. Maximum 50 KB.
         */
        logoUrl?: string | null;
        /**
         * The list of Sender IDs for the Verified SMS agent.
         */
        senders?: Schema$Sender[];
    }
    /**
     * Verified SMS capabilities
     */
    export interface Schema$VerifiedSmsCapability {
        /**
         * Required. The webhook URL where the Verified SMS callbacks are delivered.
         */
        webhookUrl?: string | null;
    }
    /**
     * The greeting shown to users when they enter a conversation with the agent for the first time.
     */
    export interface Schema$WelcomeMessage {
        /**
         * Required. The text of the welcome message. Maximum length 1000 characters.
         */
        text?: string | null;
    }
    export class Resource$Brands {
        context: APIRequestContext;
        agents: Resource$Brands$Agents;
        locations: Resource$Brands$Locations;
        constructor(context: APIRequestContext);
        /**
         * Creates a new brand.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.create({
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "name": "my_name",
         *       //   "displayName": "my_displayName"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "displayName": "my_displayName"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Brands$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Brands$Create, options?: MethodOptions): GaxiosPromise<Schema$Brand>;
        create(params: Params$Resource$Brands$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Brands$Create, options: MethodOptions | BodyResponseCallback<Schema$Brand>, callback: BodyResponseCallback<Schema$Brand>): void;
        create(params: Params$Resource$Brands$Create, callback: BodyResponseCallback<Schema$Brand>): void;
        create(callback: BodyResponseCallback<Schema$Brand>): void;
        /**
         * Deletes a brand. If the brand has any associated agents or locations, the delete request fails unless `force` is `true`.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.delete({
         *     // If true, any agents and locations associated with this brand are also deleted.
         *     force: 'placeholder-value',
         *     // Required. The unique identifier of the brand. If the brand identifier is "1234", this parameter resolves to "brands/1234".
         *     name: 'brands/my-brand',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Brands$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Brands$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Brands$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Brands$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Brands$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Gets information about a brand.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.get({
         *     // Required. The unique identifier of the brand. If the brand identifier is "1234", this parameter resolves to "brands/1234".
         *     name: 'brands/my-brand',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "displayName": "my_displayName"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Brands$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Brands$Get, options?: MethodOptions): GaxiosPromise<Schema$Brand>;
        get(params: Params$Resource$Brands$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Brands$Get, options: MethodOptions | BodyResponseCallback<Schema$Brand>, callback: BodyResponseCallback<Schema$Brand>): void;
        get(params: Params$Resource$Brands$Get, callback: BodyResponseCallback<Schema$Brand>): void;
        get(callback: BodyResponseCallback<Schema$Brand>): void;
        /**
         * Lists all the brands accessible to the user making the request. *Note*: This method always sets `pageSize` to `0`.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.list({
         *     // Specify the maximum number of results to be returned by the server. The server may further constrain the maximum number of results returned in a single page. If the page_size is 0, the server will decide the number of results to be returned.
         *     pageSize: 'placeholder-value',
         *     // The next_page_token value returned from a previous List request, if any.
         *     pageToken: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "brands": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Brands$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Brands$List, options?: MethodOptions): GaxiosPromise<Schema$ListBrandsResponse>;
        list(params: Params$Resource$Brands$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Brands$List, options: MethodOptions | BodyResponseCallback<Schema$ListBrandsResponse>, callback: BodyResponseCallback<Schema$ListBrandsResponse>): void;
        list(params: Params$Resource$Brands$List, callback: BodyResponseCallback<Schema$ListBrandsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListBrandsResponse>): void;
        /**
         * Updates information about a brand. *Caution*: If you update a field that takes a list as input, you must include the entire list in the update request. Updates to list fields replace the entire list.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.patch({
         *     // Output only. The unique identifier of the brand. Defined by the platform.
         *     name: 'brands/my-brand',
         *     // The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "name": "my_name",
         *       //   "displayName": "my_displayName"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "displayName": "my_displayName"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Brands$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Brands$Patch, options?: MethodOptions): GaxiosPromise<Schema$Brand>;
        patch(params: Params$Resource$Brands$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Brands$Patch, options: MethodOptions | BodyResponseCallback<Schema$Brand>, callback: BodyResponseCallback<Schema$Brand>): void;
        patch(params: Params$Resource$Brands$Patch, callback: BodyResponseCallback<Schema$Brand>): void;
        patch(callback: BodyResponseCallback<Schema$Brand>): void;
    }
    export interface Params$Resource$Brands$Create extends StandardParameters {
        /**
         * Request body metadata
         */
        requestBody?: Schema$Brand;
    }
    export interface Params$Resource$Brands$Delete extends StandardParameters {
        /**
         * If true, any agents and locations associated with this brand are also deleted.
         */
        force?: boolean;
        /**
         * Required. The unique identifier of the brand. If the brand identifier is "1234", this parameter resolves to "brands/1234".
         */
        name?: string;
    }
    export interface Params$Resource$Brands$Get extends StandardParameters {
        /**
         * Required. The unique identifier of the brand. If the brand identifier is "1234", this parameter resolves to "brands/1234".
         */
        name?: string;
    }
    export interface Params$Resource$Brands$List extends StandardParameters {
        /**
         * Specify the maximum number of results to be returned by the server. The server may further constrain the maximum number of results returned in a single page. If the page_size is 0, the server will decide the number of results to be returned.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous List request, if any.
         */
        pageToken?: string;
    }
    export interface Params$Resource$Brands$Patch extends StandardParameters {
        /**
         * Output only. The unique identifier of the brand. Defined by the platform.
         */
        name?: string;
        /**
         * The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Brand;
    }
    export class Resource$Brands$Agents {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a new agent to represent a brand.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.agents.create({
         *     // Required. The unique identifier of the brand the agent represents. If the brand identifier is "1234", this parameter is "brands/1234".
         *     parent: 'brands/my-brand',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "name": "my_name",
         *       //   "displayName": "my_displayName",
         *       //   "verifiedSmsAgent": {},
         *       //   "businessMessagesAgent": {},
         *       //   "verifiedCallsAgent": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "displayName": "my_displayName",
         *   //   "verifiedSmsAgent": {},
         *   //   "businessMessagesAgent": {},
         *   //   "verifiedCallsAgent": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Brands$Agents$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Brands$Agents$Create, options?: MethodOptions): GaxiosPromise<Schema$Agent>;
        create(params: Params$Resource$Brands$Agents$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Brands$Agents$Create, options: MethodOptions | BodyResponseCallback<Schema$Agent>, callback: BodyResponseCallback<Schema$Agent>): void;
        create(params: Params$Resource$Brands$Agents$Create, callback: BodyResponseCallback<Schema$Agent>): void;
        create(callback: BodyResponseCallback<Schema$Agent>): void;
        /**
         * Deletes an agent. The delete request fails if any `brands.agents.requestVerification` requests have been made for the agent.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.agents.delete({
         *     // Required. The unique identifier of the agent. If the brand identifier is "1234" and the agent identifier is "5678", this parameter resolves to "brands/1234/agents/5668".
         *     name: 'brands/my-brand/agents/my-agent',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Brands$Agents$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Brands$Agents$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Brands$Agents$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Brands$Agents$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Brands$Agents$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Get information about an agent.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.agents.get({
         *     // Required. The unique identifier of the agent. If the brand identifier is "1234" and the agent identifier is "5678", this parameter resolves to "brands/1234/agents/5668".
         *     name: 'brands/my-brand/agents/my-agent',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "displayName": "my_displayName",
         *   //   "verifiedSmsAgent": {},
         *   //   "businessMessagesAgent": {},
         *   //   "verifiedCallsAgent": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Brands$Agents$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Brands$Agents$Get, options?: MethodOptions): GaxiosPromise<Schema$Agent>;
        get(params: Params$Resource$Brands$Agents$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Brands$Agents$Get, options: MethodOptions | BodyResponseCallback<Schema$Agent>, callback: BodyResponseCallback<Schema$Agent>): void;
        get(params: Params$Resource$Brands$Agents$Get, callback: BodyResponseCallback<Schema$Agent>): void;
        get(callback: BodyResponseCallback<Schema$Agent>): void;
        /**
         * Gets the launch information for an agent.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.agents.getLaunch({
         *     // Required. The unique identifier of the agent launch.
         *     name: 'brands/my-brand/agents/my-agent/launch',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "businessMessages": {},
         *   //   "verifiedCalls": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getLaunch(params: Params$Resource$Brands$Agents$Getlaunch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getLaunch(params?: Params$Resource$Brands$Agents$Getlaunch, options?: MethodOptions): GaxiosPromise<Schema$AgentLaunch>;
        getLaunch(params: Params$Resource$Brands$Agents$Getlaunch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getLaunch(params: Params$Resource$Brands$Agents$Getlaunch, options: MethodOptions | BodyResponseCallback<Schema$AgentLaunch>, callback: BodyResponseCallback<Schema$AgentLaunch>): void;
        getLaunch(params: Params$Resource$Brands$Agents$Getlaunch, callback: BodyResponseCallback<Schema$AgentLaunch>): void;
        getLaunch(callback: BodyResponseCallback<Schema$AgentLaunch>): void;
        /**
         * Gets the verification information for an agent.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.agents.getVerification({
         *     // Required. The unique identifier of the brand and agent verification.
         *     name: 'brands/my-brand/agents/my-agent/verification',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "verificationState": "my_verificationState",
         *   //   "agentVerificationContact": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getVerification(params: Params$Resource$Brands$Agents$Getverification, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getVerification(params?: Params$Resource$Brands$Agents$Getverification, options?: MethodOptions): GaxiosPromise<Schema$AgentVerification>;
        getVerification(params: Params$Resource$Brands$Agents$Getverification, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getVerification(params: Params$Resource$Brands$Agents$Getverification, options: MethodOptions | BodyResponseCallback<Schema$AgentVerification>, callback: BodyResponseCallback<Schema$AgentVerification>): void;
        getVerification(params: Params$Resource$Brands$Agents$Getverification, callback: BodyResponseCallback<Schema$AgentVerification>): void;
        getVerification(callback: BodyResponseCallback<Schema$AgentVerification>): void;
        /**
         * Lists all the agents associated with a brand. *Note*: This method always sets `pageSize` to `0`.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.agents.list({
         *     // Specify the maximum number of results to be returned by the server. The server may further constrain the maximum number of results returned in a single page. If the page_size is 0, the server will decide the number of results to be returned.
         *     pageSize: 'placeholder-value',
         *     // The next_page_token value returned from a previous List request, if any.
         *     pageToken: 'placeholder-value',
         *     // Required. The unique identifier of the brand. If the brand identifier is "1234", this parameter resolves to "brands/1234".
         *     parent: 'brands/my-brand',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "agents": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Brands$Agents$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Brands$Agents$List, options?: MethodOptions): GaxiosPromise<Schema$ListAgentsResponse>;
        list(params: Params$Resource$Brands$Agents$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Brands$Agents$List, options: MethodOptions | BodyResponseCallback<Schema$ListAgentsResponse>, callback: BodyResponseCallback<Schema$ListAgentsResponse>): void;
        list(params: Params$Resource$Brands$Agents$List, callback: BodyResponseCallback<Schema$ListAgentsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListAgentsResponse>): void;
        /**
         * Updates information about an agent. *Caution*: If you update a field that takes a list as input, you must include the entire list in the update request. Updates to list fields replace the entire list.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.agents.patch({
         *     // The unique identifier of the agent. Read-only. Defined by the platform.
         *     name: 'brands/my-brand/agents/my-agent',
         *     // The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "name": "my_name",
         *       //   "displayName": "my_displayName",
         *       //   "verifiedSmsAgent": {},
         *       //   "businessMessagesAgent": {},
         *       //   "verifiedCallsAgent": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "displayName": "my_displayName",
         *   //   "verifiedSmsAgent": {},
         *   //   "businessMessagesAgent": {},
         *   //   "verifiedCallsAgent": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Brands$Agents$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Brands$Agents$Patch, options?: MethodOptions): GaxiosPromise<Schema$Agent>;
        patch(params: Params$Resource$Brands$Agents$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Brands$Agents$Patch, options: MethodOptions | BodyResponseCallback<Schema$Agent>, callback: BodyResponseCallback<Schema$Agent>): void;
        patch(params: Params$Resource$Brands$Agents$Patch, callback: BodyResponseCallback<Schema$Agent>): void;
        patch(callback: BodyResponseCallback<Schema$Agent>): void;
        /**
         * Begins the launch process for an agent. An agent is available to users after it launches. An agent can only have one instance of launch at a time.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.agents.requestLaunch({
         *     // Required. The unique identifier of the agent. If the brand identifier is "1234" and the agent identifier is "5678", this parameter resolves to "brands/1234/agents/5678".
         *     name: 'brands/my-brand/agents/my-agent',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "agentLaunch": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "businessMessages": {},
         *   //   "verifiedCalls": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        requestLaunch(params: Params$Resource$Brands$Agents$Requestlaunch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        requestLaunch(params?: Params$Resource$Brands$Agents$Requestlaunch, options?: MethodOptions): GaxiosPromise<Schema$AgentLaunch>;
        requestLaunch(params: Params$Resource$Brands$Agents$Requestlaunch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        requestLaunch(params: Params$Resource$Brands$Agents$Requestlaunch, options: MethodOptions | BodyResponseCallback<Schema$AgentLaunch>, callback: BodyResponseCallback<Schema$AgentLaunch>): void;
        requestLaunch(params: Params$Resource$Brands$Agents$Requestlaunch, callback: BodyResponseCallback<Schema$AgentLaunch>): void;
        requestLaunch(callback: BodyResponseCallback<Schema$AgentLaunch>): void;
        /**
         * Begins business information verification for an agent. Google contacts the brand for verification. Only 1 instance of verification is allowed at any given time.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.agents.requestVerification({
         *     // Required. The unique identifier of the brand and agent.
         *     name: 'brands/my-brand/agents/my-agent',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "agentVerificationContact": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "verificationState": "my_verificationState",
         *   //   "agentVerificationContact": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        requestVerification(params: Params$Resource$Brands$Agents$Requestverification, options: StreamMethodOptions): GaxiosPromise<Readable>;
        requestVerification(params?: Params$Resource$Brands$Agents$Requestverification, options?: MethodOptions): GaxiosPromise<Schema$AgentVerification>;
        requestVerification(params: Params$Resource$Brands$Agents$Requestverification, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        requestVerification(params: Params$Resource$Brands$Agents$Requestverification, options: MethodOptions | BodyResponseCallback<Schema$AgentVerification>, callback: BodyResponseCallback<Schema$AgentVerification>): void;
        requestVerification(params: Params$Resource$Brands$Agents$Requestverification, callback: BodyResponseCallback<Schema$AgentVerification>): void;
        requestVerification(callback: BodyResponseCallback<Schema$AgentVerification>): void;
        /**
         * Updates the launch information for an agent.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.agents.updateLaunch({
         *     // Required. The identifier for launch.
         *     name: 'brands/my-brand/agents/my-agent/launch',
         *     // The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "name": "my_name",
         *       //   "businessMessages": {},
         *       //   "verifiedCalls": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "businessMessages": {},
         *   //   "verifiedCalls": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        updateLaunch(params: Params$Resource$Brands$Agents$Updatelaunch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        updateLaunch(params?: Params$Resource$Brands$Agents$Updatelaunch, options?: MethodOptions): GaxiosPromise<Schema$AgentLaunch>;
        updateLaunch(params: Params$Resource$Brands$Agents$Updatelaunch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        updateLaunch(params: Params$Resource$Brands$Agents$Updatelaunch, options: MethodOptions | BodyResponseCallback<Schema$AgentLaunch>, callback: BodyResponseCallback<Schema$AgentLaunch>): void;
        updateLaunch(params: Params$Resource$Brands$Agents$Updatelaunch, callback: BodyResponseCallback<Schema$AgentLaunch>): void;
        updateLaunch(callback: BodyResponseCallback<Schema$AgentLaunch>): void;
        /**
         * Updates the verification state for an agent.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.agents.updateVerification({
         *     // Required. The identifier for verification.
         *     name: 'brands/my-brand/agents/my-agent/verification',
         *     // The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "name": "my_name",
         *       //   "verificationState": "my_verificationState",
         *       //   "agentVerificationContact": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "verificationState": "my_verificationState",
         *   //   "agentVerificationContact": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        updateVerification(params: Params$Resource$Brands$Agents$Updateverification, options: StreamMethodOptions): GaxiosPromise<Readable>;
        updateVerification(params?: Params$Resource$Brands$Agents$Updateverification, options?: MethodOptions): GaxiosPromise<Schema$AgentVerification>;
        updateVerification(params: Params$Resource$Brands$Agents$Updateverification, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        updateVerification(params: Params$Resource$Brands$Agents$Updateverification, options: MethodOptions | BodyResponseCallback<Schema$AgentVerification>, callback: BodyResponseCallback<Schema$AgentVerification>): void;
        updateVerification(params: Params$Resource$Brands$Agents$Updateverification, callback: BodyResponseCallback<Schema$AgentVerification>): void;
        updateVerification(callback: BodyResponseCallback<Schema$AgentVerification>): void;
    }
    export interface Params$Resource$Brands$Agents$Create extends StandardParameters {
        /**
         * Required. The unique identifier of the brand the agent represents. If the brand identifier is "1234", this parameter is "brands/1234".
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Agent;
    }
    export interface Params$Resource$Brands$Agents$Delete extends StandardParameters {
        /**
         * Required. The unique identifier of the agent. If the brand identifier is "1234" and the agent identifier is "5678", this parameter resolves to "brands/1234/agents/5668".
         */
        name?: string;
    }
    export interface Params$Resource$Brands$Agents$Get extends StandardParameters {
        /**
         * Required. The unique identifier of the agent. If the brand identifier is "1234" and the agent identifier is "5678", this parameter resolves to "brands/1234/agents/5668".
         */
        name?: string;
    }
    export interface Params$Resource$Brands$Agents$Getlaunch extends StandardParameters {
        /**
         * Required. The unique identifier of the agent launch.
         */
        name?: string;
    }
    export interface Params$Resource$Brands$Agents$Getverification extends StandardParameters {
        /**
         * Required. The unique identifier of the brand and agent verification.
         */
        name?: string;
    }
    export interface Params$Resource$Brands$Agents$List extends StandardParameters {
        /**
         * Specify the maximum number of results to be returned by the server. The server may further constrain the maximum number of results returned in a single page. If the page_size is 0, the server will decide the number of results to be returned.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous List request, if any.
         */
        pageToken?: string;
        /**
         * Required. The unique identifier of the brand. If the brand identifier is "1234", this parameter resolves to "brands/1234".
         */
        parent?: string;
    }
    export interface Params$Resource$Brands$Agents$Patch extends StandardParameters {
        /**
         * The unique identifier of the agent. Read-only. Defined by the platform.
         */
        name?: string;
        /**
         * The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Agent;
    }
    export interface Params$Resource$Brands$Agents$Requestlaunch extends StandardParameters {
        /**
         * Required. The unique identifier of the agent. If the brand identifier is "1234" and the agent identifier is "5678", this parameter resolves to "brands/1234/agents/5678".
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RequestAgentLaunchRequest;
    }
    export interface Params$Resource$Brands$Agents$Requestverification extends StandardParameters {
        /**
         * Required. The unique identifier of the brand and agent.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RequestAgentVerificationRequest;
    }
    export interface Params$Resource$Brands$Agents$Updatelaunch extends StandardParameters {
        /**
         * Required. The identifier for launch.
         */
        name?: string;
        /**
         * The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AgentLaunch;
    }
    export interface Params$Resource$Brands$Agents$Updateverification extends StandardParameters {
        /**
         * Required. The identifier for verification.
         */
        name?: string;
        /**
         * The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AgentVerification;
    }
    export class Resource$Brands$Locations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a new location for a brand.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.locations.create({
         *     // Required. The unique identifier of the brand associated with the location. If the brand identifier is "1234", this parameter resolves to "brands/1234".
         *     parent: 'brands/my-brand',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "name": "my_name",
         *       //   "placeId": "my_placeId",
         *       //   "locationEntryPointConfigs": [],
         *       //   "agent": "my_agent",
         *       //   "locationTestUrl": "my_locationTestUrl",
         *       //   "testUrls": [],
         *       //   "conversationalSettings": {},
         *       //   "defaultLocale": "my_defaultLocale",
         *       //   "listingId": "my_listingId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "placeId": "my_placeId",
         *   //   "locationEntryPointConfigs": [],
         *   //   "agent": "my_agent",
         *   //   "locationTestUrl": "my_locationTestUrl",
         *   //   "testUrls": [],
         *   //   "conversationalSettings": {},
         *   //   "defaultLocale": "my_defaultLocale",
         *   //   "listingId": "my_listingId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Brands$Locations$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Brands$Locations$Create, options?: MethodOptions): GaxiosPromise<Schema$Location>;
        create(params: Params$Resource$Brands$Locations$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Brands$Locations$Create, options: MethodOptions | BodyResponseCallback<Schema$Location>, callback: BodyResponseCallback<Schema$Location>): void;
        create(params: Params$Resource$Brands$Locations$Create, callback: BodyResponseCallback<Schema$Location>): void;
        create(callback: BodyResponseCallback<Schema$Location>): void;
        /**
         * Deletes a location. The delete request fails if any `brands.locations.requestVerification` requests have been made for the location.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.locations.delete({
         *     // Required. The unique identifier of the location. If the brand identifier is "1234" and the location identifier is "5678", this parameter resolves to "brands/1234/locations/5678".
         *     name: 'brands/my-brand/locations/my-location',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Brands$Locations$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Brands$Locations$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Brands$Locations$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Brands$Locations$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Brands$Locations$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Get information about a location.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.locations.get({
         *     // Required. The unique identifier of the location. If the brand identifier is "1234" and the location identifier is "5678", this parameter resolves to "brands/1234/locations/5678".
         *     name: 'brands/my-brand/locations/my-location',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "placeId": "my_placeId",
         *   //   "locationEntryPointConfigs": [],
         *   //   "agent": "my_agent",
         *   //   "locationTestUrl": "my_locationTestUrl",
         *   //   "testUrls": [],
         *   //   "conversationalSettings": {},
         *   //   "defaultLocale": "my_defaultLocale",
         *   //   "listingId": "my_listingId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Brands$Locations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Brands$Locations$Get, options?: MethodOptions): GaxiosPromise<Schema$Location>;
        get(params: Params$Resource$Brands$Locations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Brands$Locations$Get, options: MethodOptions | BodyResponseCallback<Schema$Location>, callback: BodyResponseCallback<Schema$Location>): void;
        get(params: Params$Resource$Brands$Locations$Get, callback: BodyResponseCallback<Schema$Location>): void;
        get(callback: BodyResponseCallback<Schema$Location>): void;
        /**
         * Gets the launch information for a location.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.locations.getLaunch({
         *     // Required. The unique identifier of the location launch.
         *     name: 'brands/my-brand/locations/my-location/launch',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "launchState": "my_launchState"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getLaunch(params: Params$Resource$Brands$Locations$Getlaunch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getLaunch(params?: Params$Resource$Brands$Locations$Getlaunch, options?: MethodOptions): GaxiosPromise<Schema$LocationLaunch>;
        getLaunch(params: Params$Resource$Brands$Locations$Getlaunch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getLaunch(params: Params$Resource$Brands$Locations$Getlaunch, options: MethodOptions | BodyResponseCallback<Schema$LocationLaunch>, callback: BodyResponseCallback<Schema$LocationLaunch>): void;
        getLaunch(params: Params$Resource$Brands$Locations$Getlaunch, callback: BodyResponseCallback<Schema$LocationLaunch>): void;
        getLaunch(callback: BodyResponseCallback<Schema$LocationLaunch>): void;
        /**
         * Gets the verification information for a location.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.locations.getVerification({
         *     // Required. The unique identifier of the location verification.
         *     name: 'brands/my-brand/locations/my-location/verification',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "verificationState": "my_verificationState"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getVerification(params: Params$Resource$Brands$Locations$Getverification, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getVerification(params?: Params$Resource$Brands$Locations$Getverification, options?: MethodOptions): GaxiosPromise<Schema$LocationVerification>;
        getVerification(params: Params$Resource$Brands$Locations$Getverification, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getVerification(params: Params$Resource$Brands$Locations$Getverification, options: MethodOptions | BodyResponseCallback<Schema$LocationVerification>, callback: BodyResponseCallback<Schema$LocationVerification>): void;
        getVerification(params: Params$Resource$Brands$Locations$Getverification, callback: BodyResponseCallback<Schema$LocationVerification>): void;
        getVerification(callback: BodyResponseCallback<Schema$LocationVerification>): void;
        /**
         * Lists all the locations for a brand. *Note*: This method always sets `pageSize` to `0`.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.locations.list({
         *     // The maximum number of results to be returned by the server. The server may further constrain the maximum number of results returned in a single page. If the page_size is 0, the server will decide the number of results to be returned.
         *     pageSize: 'placeholder-value',
         *     // The next_page_token value returned from a previous List request, if any.
         *     pageToken: 'placeholder-value',
         *     // Required. The unique identifier of the brand. If the brand identifier is "1234", this parameter resolves to "brands/1234".
         *     parent: 'brands/my-brand',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "locations": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Brands$Locations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Brands$Locations$List, options?: MethodOptions): GaxiosPromise<Schema$ListLocationsResponse>;
        list(params: Params$Resource$Brands$Locations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Brands$Locations$List, options: MethodOptions | BodyResponseCallback<Schema$ListLocationsResponse>, callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
        list(params: Params$Resource$Brands$Locations$List, callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
        /**
         * Updates information about a location. *Caution*: If you update a field that takes a list as input, you must include the entire list in the update request. Updates to list fields replace the entire list.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.locations.patch({
         *     // The unique identifier of the location. Read-only. Defined by the platform.
         *     name: 'brands/my-brand/locations/my-location',
         *     // The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "name": "my_name",
         *       //   "placeId": "my_placeId",
         *       //   "locationEntryPointConfigs": [],
         *       //   "agent": "my_agent",
         *       //   "locationTestUrl": "my_locationTestUrl",
         *       //   "testUrls": [],
         *       //   "conversationalSettings": {},
         *       //   "defaultLocale": "my_defaultLocale",
         *       //   "listingId": "my_listingId"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "placeId": "my_placeId",
         *   //   "locationEntryPointConfigs": [],
         *   //   "agent": "my_agent",
         *   //   "locationTestUrl": "my_locationTestUrl",
         *   //   "testUrls": [],
         *   //   "conversationalSettings": {},
         *   //   "defaultLocale": "my_defaultLocale",
         *   //   "listingId": "my_listingId"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Brands$Locations$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Brands$Locations$Patch, options?: MethodOptions): GaxiosPromise<Schema$Location>;
        patch(params: Params$Resource$Brands$Locations$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Brands$Locations$Patch, options: MethodOptions | BodyResponseCallback<Schema$Location>, callback: BodyResponseCallback<Schema$Location>): void;
        patch(params: Params$Resource$Brands$Locations$Patch, callback: BodyResponseCallback<Schema$Location>): void;
        patch(callback: BodyResponseCallback<Schema$Location>): void;
        /**
         * Begins the launch process for a location. A location is available to users after it launches. A location can only have one instance of launch at a time. If the location hasn't been launched previously, sets the launch status to `PENDING`.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.locations.requestLaunch({
         *     // Required. The unique identifier of the location. If the brand identifier is "1234" and the location identifier is "5678", this parameter resolves to "brands/1234/locations/5678".
         *     name: 'brands/my-brand/locations/my-location',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {}
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "launchState": "my_launchState"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        requestLaunch(params: Params$Resource$Brands$Locations$Requestlaunch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        requestLaunch(params?: Params$Resource$Brands$Locations$Requestlaunch, options?: MethodOptions): GaxiosPromise<Schema$LocationLaunch>;
        requestLaunch(params: Params$Resource$Brands$Locations$Requestlaunch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        requestLaunch(params: Params$Resource$Brands$Locations$Requestlaunch, options: MethodOptions | BodyResponseCallback<Schema$LocationLaunch>, callback: BodyResponseCallback<Schema$LocationLaunch>): void;
        requestLaunch(params: Params$Resource$Brands$Locations$Requestlaunch, callback: BodyResponseCallback<Schema$LocationLaunch>): void;
        requestLaunch(callback: BodyResponseCallback<Schema$LocationLaunch>): void;
        /**
         * Begins verification for a location. A location is available for use after it's verified. A location can only have one instance of verification at a time. If the location status hasn't been verified previously, sets the status to `PENDING`.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.locations.requestVerification(
         *     {
         *       // Required. The unique identifier of the location. If the brand identifier is "1234" and the location identifier is "5678", this parameter resolves to "brands/1234/locations/5678".
         *       name: 'brands/my-brand/locations/my-location',
         *
         *       // Request body metadata
         *       requestBody: {
         *         // request body parameters
         *         // {}
         *       },
         *     }
         *   );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "verificationState": "my_verificationState"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        requestVerification(params: Params$Resource$Brands$Locations$Requestverification, options: StreamMethodOptions): GaxiosPromise<Readable>;
        requestVerification(params?: Params$Resource$Brands$Locations$Requestverification, options?: MethodOptions): GaxiosPromise<Schema$LocationVerification>;
        requestVerification(params: Params$Resource$Brands$Locations$Requestverification, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        requestVerification(params: Params$Resource$Brands$Locations$Requestverification, options: MethodOptions | BodyResponseCallback<Schema$LocationVerification>, callback: BodyResponseCallback<Schema$LocationVerification>): void;
        requestVerification(params: Params$Resource$Brands$Locations$Requestverification, callback: BodyResponseCallback<Schema$LocationVerification>): void;
        requestVerification(callback: BodyResponseCallback<Schema$LocationVerification>): void;
        /**
         * Updates the launch information for a location.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.brands.locations.updateLaunch({
         *     // Required. The identifier for launch.
         *     name: 'brands/my-brand/locations/my-location/launch',
         *     // The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "name": "my_name",
         *       //   "launchState": "my_launchState"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "launchState": "my_launchState"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        updateLaunch(params: Params$Resource$Brands$Locations$Updatelaunch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        updateLaunch(params?: Params$Resource$Brands$Locations$Updatelaunch, options?: MethodOptions): GaxiosPromise<Schema$LocationLaunch>;
        updateLaunch(params: Params$Resource$Brands$Locations$Updatelaunch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        updateLaunch(params: Params$Resource$Brands$Locations$Updatelaunch, options: MethodOptions | BodyResponseCallback<Schema$LocationLaunch>, callback: BodyResponseCallback<Schema$LocationLaunch>): void;
        updateLaunch(params: Params$Resource$Brands$Locations$Updatelaunch, callback: BodyResponseCallback<Schema$LocationLaunch>): void;
        updateLaunch(callback: BodyResponseCallback<Schema$LocationLaunch>): void;
    }
    export interface Params$Resource$Brands$Locations$Create extends StandardParameters {
        /**
         * Required. The unique identifier of the brand associated with the location. If the brand identifier is "1234", this parameter resolves to "brands/1234".
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Location;
    }
    export interface Params$Resource$Brands$Locations$Delete extends StandardParameters {
        /**
         * Required. The unique identifier of the location. If the brand identifier is "1234" and the location identifier is "5678", this parameter resolves to "brands/1234/locations/5678".
         */
        name?: string;
    }
    export interface Params$Resource$Brands$Locations$Get extends StandardParameters {
        /**
         * Required. The unique identifier of the location. If the brand identifier is "1234" and the location identifier is "5678", this parameter resolves to "brands/1234/locations/5678".
         */
        name?: string;
    }
    export interface Params$Resource$Brands$Locations$Getlaunch extends StandardParameters {
        /**
         * Required. The unique identifier of the location launch.
         */
        name?: string;
    }
    export interface Params$Resource$Brands$Locations$Getverification extends StandardParameters {
        /**
         * Required. The unique identifier of the location verification.
         */
        name?: string;
    }
    export interface Params$Resource$Brands$Locations$List extends StandardParameters {
        /**
         * The maximum number of results to be returned by the server. The server may further constrain the maximum number of results returned in a single page. If the page_size is 0, the server will decide the number of results to be returned.
         */
        pageSize?: number;
        /**
         * The next_page_token value returned from a previous List request, if any.
         */
        pageToken?: string;
        /**
         * Required. The unique identifier of the brand. If the brand identifier is "1234", this parameter resolves to "brands/1234".
         */
        parent?: string;
    }
    export interface Params$Resource$Brands$Locations$Patch extends StandardParameters {
        /**
         * The unique identifier of the location. Read-only. Defined by the platform.
         */
        name?: string;
        /**
         * The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Location;
    }
    export interface Params$Resource$Brands$Locations$Requestlaunch extends StandardParameters {
        /**
         * Required. The unique identifier of the location. If the brand identifier is "1234" and the location identifier is "5678", this parameter resolves to "brands/1234/locations/5678".
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RequestLocationLaunchRequest;
    }
    export interface Params$Resource$Brands$Locations$Requestverification extends StandardParameters {
        /**
         * Required. The unique identifier of the location. If the brand identifier is "1234" and the location identifier is "5678", this parameter resolves to "brands/1234/locations/5678".
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RequestLocationVerificationRequest;
    }
    export interface Params$Resource$Brands$Locations$Updatelaunch extends StandardParameters {
        /**
         * Required. The identifier for launch.
         */
        name?: string;
        /**
         * The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$LocationLaunch;
    }
    export class Resource$Partners {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Get the information about the partner.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.partners.get({
         *     // Optional. The unique identifier of the partner.
         *     name: 'partners/my-partner',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "displayName": "my_displayName",
         *   //   "productCapabilities": [],
         *   //   "company": "my_company",
         *   //   "contactEmails": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Partners$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Partners$Get, options?: MethodOptions): GaxiosPromise<Schema$Partner>;
        get(params: Params$Resource$Partners$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Partners$Get, options: MethodOptions | BodyResponseCallback<Schema$Partner>, callback: BodyResponseCallback<Schema$Partner>): void;
        get(params: Params$Resource$Partners$Get, callback: BodyResponseCallback<Schema$Partner>): void;
        get(callback: BodyResponseCallback<Schema$Partner>): void;
        /**
         * Updates the information for a partner.
         * @example
         * ```js
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/businesscommunications.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const businesscommunications = google.businesscommunications('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await businesscommunications.partners.patch({
         *     // Output only. The unique identifier of the partner. Defined by the platform.
         *     name: 'partners/my-partner',
         *     // The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "name": "my_name",
         *       //   "displayName": "my_displayName",
         *       //   "productCapabilities": [],
         *       //   "company": "my_company",
         *       //   "contactEmails": []
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "name": "my_name",
         *   //   "displayName": "my_displayName",
         *   //   "productCapabilities": [],
         *   //   "company": "my_company",
         *   //   "contactEmails": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * ```
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Partners$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Partners$Patch, options?: MethodOptions): GaxiosPromise<Schema$Partner>;
        patch(params: Params$Resource$Partners$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Partners$Patch, options: MethodOptions | BodyResponseCallback<Schema$Partner>, callback: BodyResponseCallback<Schema$Partner>): void;
        patch(params: Params$Resource$Partners$Patch, callback: BodyResponseCallback<Schema$Partner>): void;
        patch(callback: BodyResponseCallback<Schema$Partner>): void;
    }
    export interface Params$Resource$Partners$Get extends StandardParameters {
        /**
         * Optional. The unique identifier of the partner.
         */
        name?: string;
    }
    export interface Params$Resource$Partners$Patch extends StandardParameters {
        /**
         * Output only. The unique identifier of the partner. Defined by the platform.
         */
        name?: string;
        /**
         * The update mask applies to the resource. For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Partner;
    }
    export {};
}
