# DATABASE DOCUMENTATION
<!-- 
VERSION: 1.0.0
LAST_UPDATED: 2024-12-15
CHANGELOG:
- 1.0.0 (2024-12-15): Initial database schema
-->

## CHANGE MANAGEMENT POLICY

### 🚨 MANDATORY PROCESS
All database changes MUST follow this process:

1. **Before any SQL change**:
   - Update this documentation file
   - Increment version number
   - Document what/why changed

2. **Create migration file**:
   - Use Liquibase format
   - Include UP and DOWN migrations
   - Test locally first

3. **Commit together**:
   - DATABASE_DOCUMENTATION.md
   - Liquibase migration file
   - Never commit one without the other

### VERSIONING FORMAT
Use Semantic Versioning: MAJOR.MINOR.PATCH
- MAJOR: Breaking changes (dropping columns, changing types)
- MINOR: New features (adding columns, tables)
- PATCH: Bug fixes, optimizations

## CURRENT SCHEMA
[Will be populated after first migration]
